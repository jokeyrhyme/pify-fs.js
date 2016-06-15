'use strict'

const fs = require('graceful-fs')
const pify = require('pify')

module.exports = pify(fs, {
  exclude: [
    /^exists/,
    /.+Stream$/,
    /.+Sync$/
  ],
  excludeMain: true
})
