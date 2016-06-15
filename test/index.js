'use strict'

const assert = require('assert')

const isPromise = require('is-promise')

const fs = require('../index.js')

const CWD = process.cwd()

fs.readdir(CWD)
  .then((files) => assert(Array.isArray(files), 'readdir() result is an Array'))
  .catch(assert.ifError)

assert(!isPromise(fs.exists(CWD)), 'exists() is not pify\'ed')

assert(!isPromise(fs.createReadStream(__filename)), 'createReadStream() is not pify\'ed')
