const express = require('express')
const app = express()
const cors = require("cors")
//require ('dontenv-safe').config()

//const db = require('.data/database')
//db.connect

app.use(cors())
app.use(express.json())

//const library = require('.routes/library')
//app.use('/library', library)

module.exports = app