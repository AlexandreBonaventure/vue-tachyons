import test from 'ava'

import {
  _formatClassString,
  transformQueryToClasses,
  // generateCSSInJSClasses,
} from '../src/engine.js'

test('engine: should format correctly', t => {
  t.plan(7)
  const classes = [
    'o-50',
    'bg-dark-gray',
    'b--dark-gray',
    'blue',
    'f5',
    'pa3',
    'ma2',
  ]
  const classesToMatch = [
    'o_50',
    'bg_dark_gray',
    'b__dark_gray',
    'blue',
    'f5',
    'pa3',
    'ma2',
  ]
  classes.forEach((c, i) => {
    t.true(_formatClassString(c) === classesToMatch[i])
  })
})

test('engine: should handle string correctly', t => {
  t.plan(2)

  let classes = transformQueryToClasses('.pa2 .b--dark-gray')
  t.true(classes.length === 2)

  classes = transformQueryToClasses('')
  t.true(classes.length === 0)
})
