const express = require('express')
const router = express.Router()
const controller = require("../controllers/libraryControllers")

router.get('/', controller.getAll)
router.post('/', controller.createBook)
router.delete('/:id', controller.deleteBook)

module.exports = router