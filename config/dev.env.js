'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // 测试环境请求的路由
  root: '"//192.168.2.142:8080"'
})
