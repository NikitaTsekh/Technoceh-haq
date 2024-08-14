import { boot } from 'quasar/wrappers'
import { Notify } from 'quasar'

const SHOW_ERROR_MESSAGE = message => Notify.create({ classes: 'error-notification', message })
const SHOW_SUCCESS_MESSAGE = message => Notify.create({ classes: 'success-notification', message })

export default boot(({ app }) => {
  app.config.globalProperties.$showErrorMessage = SHOW_ERROR_MESSAGE
  app.config.globalProperties.$showSuccessMessage = SHOW_SUCCESS_MESSAGE
})

export { SHOW_ERROR_MESSAGE, SHOW_SUCCESS_MESSAGE }
