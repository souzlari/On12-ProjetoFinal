const mongoose = require('mongoose')

const booksSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId, 
  title: {type: String, required: true},
  author: {type: String, required: true},
  year: {type: String, required: true},
  country: {type: String, required: true}
})

module.exports = mongoose.model('books', booksSchema)