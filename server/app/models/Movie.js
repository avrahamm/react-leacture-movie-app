const mongoose = require('mongoose')

const Movie = new mongoose.Schema({
  name: { type: String, required: true },
  created: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  director: { type: String, required: true },
  rating: { type: Number, required: true }
})

module.exports = mongoose.model('Movie', Movie)
