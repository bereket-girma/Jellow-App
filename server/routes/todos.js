const express = require('express')
const router = express.Router()

router.get('/todos', (req, res, next) => {
    res.json([{id: 1, text: 'my todo'}])
})

module.exports = router