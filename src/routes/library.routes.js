const express = require('express')
const router = express.Router()
const controller = require("../controllers/libraryControllers")

router.get('/', controller.getAll)
router.get("/:id", controller.getById)
router.post('/cadastrar', controller.createBook)
router.patch("/atualizar/:id", controller.updateBook)
router.delete("/deletar/:id", controller.deleteBook)

router.get("/oi", (req, res)=>{
    res.status(200).send({"mensagem":"oi to aqui ta funcionando "})
})


module.exports = router