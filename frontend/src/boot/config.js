import { boot } from 'quasar/wrappers'
import config from 'src/utils/config'

export default boot(({ app }) => {
  app.config.globalProperties.$config = config
})
