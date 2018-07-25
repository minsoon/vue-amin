'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  API_BASE_URL: '"-"',
  ANALYTICS_ID: '"UA-122842050-1"',
  appId: '2'
})
