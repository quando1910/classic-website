'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  SERVER_IP: '"https://manage.theclassic.studio"',
  SERVER_IP2: '"http://localhost:9999"',
  APP_ID: '"884618848377974"',
  VERSION: '"v2.11"',
  MAP_KEY: '"AIzaSyDBP7bsS6gD5Pe8ZS9esToRwiG4THL-FRQ"',
  MAP_VERSION: '"3.26"'
})
