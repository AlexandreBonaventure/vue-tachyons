import test from 'ava'

import index from '../src/index.js'
test('should have install key', t => {
  t.true(index.hasOwnProperty('install'))
})
