
import cxs from 'cxs/atomic'
import { compact } from 'lodash-es'
import t from 'tachyons-js'

export function _formatClassString (className) {
  const pattern = /^([a-z]+(?:-{1,2}[a-z]+)*?-?)([0-9]+)?(-[a-z]{1,2})?$/gi
  return className.replace(pattern, (match, core, unit = '', mqModifier = '') =>
    `${core.replace(/-/g, '_')}${unit}${mqModifier && '_' + mqModifier}`)
}

/**
 * transform class string into classes array
 * @return {Array} classes
 */
export function transformQueryToClasses (value) {
  const normalizedValue = value.replace(/\s/g, '.')
  const classes = compact(normalizedValue.split('.')).map(c => _formatClassString(c))
  return classes
}

/**
 * generate CSS-IN-JS classes
 * @param  {[type]} classes [description]
 * @return {[type]}         [description]
 */
export function generateCSSInJSClasses (classes) {
  const tachyonsRules = classes.reduce((sum, tClass) => {
    return {
      ...sum,
      ...(t[tClass] || {}),
    }
  }, {})
  if (!tachyonsRules) return
  return cxs(tachyonsRules)
}
