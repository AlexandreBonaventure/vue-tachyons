
import {
  transformQueryToClasses,
  generateCSSInJSClasses,
} from './engine.js'
import { addClass, removeClass } from './utils/index.js'

const directive = {
  update (newValue, oldValue) {
    const classes = transformQueryToClasses(newValue)
    const classString = generateCSSInJSClasses(classes)
    if (this._classString) this._classString.split(' ').map(c => removeClass(this.el, c))
    this._classString = classString
    classString.split(' ').map(c => addClass(this.el, c))
  },
}

export default directive
