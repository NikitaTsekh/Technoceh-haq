import { boot } from 'quasar/wrappers'
import axios from 'axios'
import { SHOW_ERROR_MESSAGE, SHOW_SUCCESS_MESSAGE } from './notify'

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({
  baseURL: 'http://89.169.133.130:8000/api',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
})

export default boot(({ app, router, store }) => {
  api.interceptors.response.use(
    response => {
      if (response?.data?.message) {
        SHOW_SUCCESS_MESSAGE(response.data.message)
      }

      return response
    },
    error => {
      if (error.request.status == 401 || error.request.status == 403) {
        localStorage.removeItem('token')
        router.push({ name: 'auth' })

        throw error
      }

      if (error.response.data?.errors) {
        let firstErrorKey = Object.keys(error.response.data?.errors)[0]

        SHOW_ERROR_MESSAGE(error.response.data?.errors[firstErrorKey][0])
      } else if (error.response?.data?.message) {
        SHOW_ERROR_MESSAGE(error.response.data.message)
      }

      throw error
    }
  )

  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { api }
