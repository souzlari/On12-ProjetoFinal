const express = require('express');
const cors = require('cors');
const db = require('./data/database');
const library = require('./routes/library.routes');
//require ('dontenv-safe').config()

const app = express();
db.connect();


app.use(express.json());
app.use(cors());
app.use('/library', library);

module.exports = app