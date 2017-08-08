/* eslint-disable no-template-curly-in-string */
import v1 from './v1.js'
const versions = {
  v1,
}
const install = function install (Vue) {
  Vue.directive('tachyons', versions[`v${Vue.version.slice(0, 1)}`])
}
const plugin = { install }

export default plugin

// Automatic installation if Vue has been added to the global scope.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
