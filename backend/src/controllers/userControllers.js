const user = require('../models/librarySchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;

const create = async (req, res) => {
  const senhaComHash = bcrypt.hashSync(req.body.senha, 10)
  req.body.senha = senhaComHash

  const user = new user(req.body)

  try {
    const newUser = await user.save()
    res.status(201).json(newUser)
  } catch (err) {
    res.status(400).json({ message: err.message})
  }
};

const login = (req, res) => {
  user.findOne({ email: req.body.email }, (err, foundUser) => {
    if (!foundUser) {
      return res.status(404).send({ message: 'User not found.', email: `${req.body.email}`})
    }

    const validPassword = bcrypt.compareSync(req.body.password, foundUser.password)

    if (!validPassword) {
      return res.status(401).send({message: "Login não autorizado!"})
    }

    const token = jwt.sign({email: req.body.email}, SECRET)
    res.status(200).send({ messagem: "Login realizado com sucesso!", token: token})
})

};

module.exports = { create, login }