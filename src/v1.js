
import cxs from 'cxs/atomic'
import { snakeCase, compact } from 'lodash-es'
import t from 'tachyons-js'
import 'tachyons-js/variables.css'
import { addClass } from './utils/index.js'

const directive = {
  update (newValue, oldValue) {
    // console.log('class', newValue.split('.'))
    const classes = compact(newValue.split('.')).map(c => snakeCase(c))
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
