'use strict'

const assert = require('assert')

const fs = require('../index.js')

const CWD = process.cwd()

fs.readdir(CWD)
  .then((files) => assert(Array.isArray(files), 'readdir() result is an Array'))
  .catch(assert.ifError)

assert.equal(typeof fs.exists(CWD), 'undefined', 'exists() is not pify\'ed')
