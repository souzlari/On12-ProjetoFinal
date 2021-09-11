const express = require('express');
const router = express.Router();
const controller = require('../controllers/libraryControllers');

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/register', controller.createBook);
router.patch('/update/:id', controller.updateBook);
router.delete('/delete/:id', controller.deleteBook);

module.exports = router