const mongoose = require("mongoose")

const booksSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId, 
  title: {type: String, required: true},
  author: {type: String, required: true},
  year: {type: String, required: true},
  read: {type: Boolean, required: true}
})

module.exports = mongoose.model('books', booksSchema)