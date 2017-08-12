
import {
  transformQueryToClasses,
  generateCSSInJSClasses,
} from './engine.js'
import { addClass } from './utils/index.js'

const directive = {
  update (newValue, oldValue) {
    const classes = transformQueryToClasses(newValue)
    const classString = generateCSSInJSClasses(classes)
    classString.split(' ').map(c => addClass(this.el, c))
  },
  unbind () {
    // do clean up work
    // e.g. remove event listeners added in bind()
  },
}

export default directive
