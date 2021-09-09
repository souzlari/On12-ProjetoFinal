const express = require('express')
const router = express.Router()
const controller = require('../controllers/libraryControllers')

router.get('/', controller.getAll)
router.get('/:id', controller.getById)
router.post('/register', controller.createBook)
router.patch('/update/:id', controller.updateBook)
router.delete('/delete/:id', controller.deleteBook)

router.get('/oi', (req, res)=>{
    res.status(200).send({'mensagem':'oi to aqui ta funcionando,'})
})


module.exports = router