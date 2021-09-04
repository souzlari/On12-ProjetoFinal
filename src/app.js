const express = require('express')
const cors = require("cors")
const db = require('./src/data/database')
//require ('dontenv-safe').config()

const app = express()
db.connect()

app.use(express.json())
app.use(cors())

app.use("/", index)

//const library = require('.routes/library')
//app.use('/library', library)

module.exports = app