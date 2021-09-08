const mongoose = require("mongoose");
const librarySchema = require("../models/librarySchema");
//const books = require("../models/librarySchema");

const getAll = async (req, res) => {
    const books = await librarySchema.find()
    res.status(200).json(books)
};

const createBook = async (req, res) => {

  const book = new librarySchema({

    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    author: req.body.author,
    pages: req.body.pages,
    country: req.body.country
  })
  try {
    const newBook = await book.save()
    res.status(201).json(newBook)
  } catch (err) {
    res.status(400).json({ message: err.message})
  }
};

const getById = async (req, res) => {
  try {
      const book = await librarySchema.findById(req.params.id)
      if(book == null) {
          return res.status(404).json({message: 'Perdão, livro não encontrado.'})
      }
      res.json(book)
  } catch (err) {
      res.status(500).json({ message: err.message })

  }
};

const updateBook = async (req, res) => {
  try {
      const book = await librarySchema.findById(req.params.id)
      if(book == null) {
          return res.status(404).json({message: 'Perdão, livro não encontrado.'})
      }
      
      if (req.body.title != null) {
          book.title = req.body.title
      }
      if (req.body.author != null) {
          book.author = req.body.author
      }
      if (req.body.pages != null) {
          book.pages = req.body.pages
      }
      if (req.body.criadoEm != null) {
          book.country = req.body.country
      }
      
      const bookUpdated = await book.save()
      res.json(bookUpdated)

  } catch (err) {
      res.status(500).json({ message: err.message })
  }
};

const deleteBook = async (req, res) => {
  try{
    const book = await librarySchema.findById(req.params.id)
    if(book == null){
      return res.status(404).json({message: "Perdão, livro não encontrado."})
    }

    await book.remove()
    res.status(200).json({message: "Livro removido com sucesso!"})

  } catch(err){
    res.status(500).json({message:err.message})
  }
};

module.exports = {
    getAll,
    createBook,
    getById,
    updateBook,
    deleteBook
}