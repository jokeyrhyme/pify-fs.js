# pify-fs [![npm](https://img.shields.io/npm/v/@jokeyrhyme/pify-fs.svg?maxAge=2592000)](https://www.npmjs.com/package/@jokeyrhyme/pify-fs) [![Travis CI Status](https://travis-ci.org/jokeyrhyme/pify-fs.js.svg?branch=master)](https://travis-ci.org/jokeyrhyme/pify-fs.js) [![AppVeyor Status](https://img.shields.io/appveyor/ci/jokeyrhyme/pify-fs-js/master.svg)](https://ci.appveyor.com/project/jokeyrhyme/pify-fs-js)

the Node.js fs module, safer via graceful-fs, and more convenient via pify


## What is this?

I frequently use the awesome [graceful-fs](https://www.npmjs.com/package/graceful-fs) wrapper in combination with the convenient [pify](https://www.npmjs.com/package/pify) wrapper.

I got tired of doing this over and over again, so I made this module.


## Usage

```js
const fs = require('@jokeyrhyme/pify-fs')

fs.readdir(process.cwd())
  .then((files) => assert(Array.isArray(files)))
```

