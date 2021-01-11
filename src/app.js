// Modules and dependencies
const nunjucks = require('nunjucks')
const path = require('path')
const express = require('express')
const app = express()

// Nunjucks configuration
nunjucks.configure(path.join(__dirname, '/../public/pages'), {
  express: app,
  noCache: true
})

// Static files
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '/../public/')))

// Routes
const pageHome = require('./routes/page-home.js')
const page404 = require('./routes/page-404.js')

app.get('/', pageHome)
app.get('*', page404) // Esta rota deve sempre ser a última!

module.exports = app
