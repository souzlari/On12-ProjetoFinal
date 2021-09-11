require('dotenv').config();
const mongoose = require('mongoose');

const MONGO_URL = process.env.MONGODB_URI || 'mongodb://localhost:27017/reprograma-conexao';

const connect = () => {
    mongoose.connect(MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>{
        console.log("Conectades bb no MongoDb Atlas")
    })
    .catch((err)=>{
        console.log("Algo deu errado")
        console.error(err)
    })
};

module.exports = { connect }
