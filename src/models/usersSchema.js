const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  senha: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('usuarias', usersSchema) 