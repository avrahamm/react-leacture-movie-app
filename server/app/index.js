const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')

// ENV
const { PORT } = require('./conf')
const NODE_ENV = process.env.NODE_ENV

// Joi-Validations
const Joi = require('@hapi/joi')
Joi.objectId = require('joi-objectid')(Joi)

// connect DB
require('./mongo')

// Passport
// require('./passport')

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.json({ message: 'server is runing!' })
})

app.use('/api', require('./routes'))

app.listen(PORT, () => {
  console.log(`[NODE_ENV]: ${NODE_ENV}`)
  console.log(`[APP]: app listening on port ${PORT}!`)
})
