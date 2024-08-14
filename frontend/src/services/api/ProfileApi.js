import { api } from 'src/boot/axios'

export default class ProfileApi {
  static sendCode(phone) {
    return api.post('account/auth/send-code/', { phone })
  }

  static checkCode(phone, code) {
    return api.get('account/auth/check-code/', { params: { phone, code } })
  }

  static getMe() {
    return api.get('account/auth/me/')
  }
}
