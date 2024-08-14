import { store } from 'quasar/wrappers'
import { createPinia } from 'pinia'
import router from '../router/index'
import { markRaw } from 'vue'

const r = router()

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store((/* { ssrContext } */) => {
  const pinia = createPinia()

  pinia.use(({ store }) => {
    store.router = markRaw(r)
  })

  return pinia
})
