const mongoose = require('mongoose')
const { DB_HOST_URI } = require('./conf')

mongoose
  .connect(DB_HOST_URI, { useNewUrlParser: true })
  .then(connection => {
    console.log('[MongoDB] Conected!')
    console.log(`[MongoDB] URI: ${DB_HOST_URI}`)
  })
  .catch(() => {
    console.log('[MongoDB] Conection Fail!')
  })

