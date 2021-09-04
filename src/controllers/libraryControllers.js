const mongoose = require("mongoose")
const books = require("../models/libraryModels")

//Pega todos os livros
const getAll = async (req, res) => {
    const books = await books.find().populate('book')
    res.status(200).json(books)
}

//cria um livro
const createBook = async (req, res) => {

  const book = new books({

    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    author: req.body.author,
    year: req.body.year,
    read: req.body.read
  })
  try {
    const newBook = await book.save()
    res.status(201).json(newBook)
  } catch (err) {
    res.status(400).json({ message: err.message})
  }
}

//deletar um livro
const deleteBook = async (req, res) => {
  try{
    const book = await books.findById(req.params.id)
    if(book == null){
      return res.status(404).json({message: "Livro não encontrado"})
    }

    book.remove()
    res.status(200).json({message: "Livro removido com sucesso"})

  } catch(err){
    res.status(500).json({message:err.message})
  }
}

module.exports = {
    getAll,
    createBook,
    deleteBook
}