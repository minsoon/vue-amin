'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_BASE_URL: '"-"',
  ANALYTICS_ID: '"UA-122842050-1"',
  appId: '2'
})
