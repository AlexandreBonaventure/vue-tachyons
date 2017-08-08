
import cxs from 'cxs/atomic'
import { snakeCase, compact } from 'lodash-es'
import t from 'tachyons-js'
import 'tachyons-js/variables.css'
import { addClass } from './utils/index.js'

const directive = {
  update (newValue, oldValue) {
    const classes = compact(newValue.split('.')).map(c => {
      const pattern = /^([a-z]+(?:-{1,2}[a-z]+)*?)([0-9]+)?(-[a-z]{1,2})?$$/gi
      return c.replace(pattern, (match, p1, unit, mqModifier, offset, string) =>
        `${snakeCase(p1)}${unit || ''}${mqModifier ? '_' + mqModifier : ''}`)
    })
    const className = cxs({
      ...classes.reduce((sum, tClass) => ({ ...sum, ...t[tClass] }), {}),
    })
    className.split(' ').map(c => addClass(this.el, c))
  },
  unbind () {
    // do clean up work
    // e.g. remove event listeners added in bind()
  },
}

export default directive
