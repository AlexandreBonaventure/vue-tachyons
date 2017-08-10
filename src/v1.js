
import cxs from 'cxs/atomic'
import { compact } from 'lodash-es'
import t from 'tachyons-js'
import 'tachyons-js/variables.css'
import { addClass } from './utils/index.js'

const directive = {
  update (newValue, oldValue) {
    const normalizedValue = newValue.replace(/\s/g, '.')
    const classes = compact(normalizedValue.split('.')).map(c => {
      const pattern = /^([a-z]+(?:-{1,2}[a-z]+)*?-?)([0-9]+)?(-[a-z]{1,2})?$/gi
      return c.replace(pattern, (match, core, unit = '', mqModifier = '') =>
        `${core.replace(/-/g, '_')}${unit}${mqModifier && '_' + mqModifier}`)
    })
    const tachyonsRules = classes.reduce((sum, tClass) => {
      return {
        ...sum,
        ...(t[tClass] || {}),
      }
    }, {})
    if (!tachyonsRules) return
    const className = cxs(tachyonsRules)
    className.split(' ').map(c => addClass(this.el, c))
  },
  unbind () {
    // do clean up work
    // e.g. remove event listeners added in bind()
  },
}

export default directive
