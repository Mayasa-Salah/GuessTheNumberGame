const express = require('express')

const app = express()

const result = require('./routes/result')

app.use(result)

module.exports = {
  path: '/api',
  handler: app
}
