import { defineStore } from 'pinia'
import Profile from 'src/models/Profile/Profile'
import ProfileApi from 'src/services/api/ProfileApi'
import { api } from 'src/boot/axios'
import { SHOW_ERROR_MESSAGE } from 'src/boot/notify'

export const useProfileStore = defineStore('profile', {
  state: () => ({
    token: localStorage.getItem('token'),
    auth: {
      phone: null,
      code: null,
      isLoading: false,
      isSmsSent: false,
    },

    profile: new Profile(),
  }),
  getters: {
    isProfileLoaded: state => state.profile?.id,
    issetToken: state => state.token,
  },
  actions: {
    loadProfile() {
      ProfileApi.getMe().then(response => {
        this.profile = new Profile(response.data)
      })
    },
    sendCode() {
      this.auth.isLoading = true

      ProfileApi.sendCode(this.auth.phone)
        .then(response => {
          this.auth.isSmsSent = true
        })
        .finally(() => {
          this.auth.isLoading = false
        })
    },
    async checkCode() {
      this.auth.isLoading = true

      return await ProfileApi.checkCode(this.auth.phone, this.auth.code)
        .then(response => {
          const { token } = response.data

          localStorage.setItem('token', token)
          api.defaults.headers.common['Authorization'] = token
          this.token = token

          this.router.push({ name: 'tasks' })
          this.resetAuth()
        })
        .catch(error => {
          SHOW_ERROR_MESSAGE(error.response.data?.error)
        })
        .finally(() => {
          this.auth.isLoading = false
        })
    },

    resetAuth() {
      this.auth = {
        phone: null,
        code: null,
        isLoading: false,
        isSmsSent: false,
      }
    },
    logout() {
      localStorage.removeItem('token')
    },
  },
})
