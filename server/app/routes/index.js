module.exports = require('express')
  .Router()
  .use('/movies', require('./Movies'))
