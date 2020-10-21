const express = require('express')
const router = express.Router()

router.get('/users', (req, res, next) => {
    res.json([{id: 1, first_name: 'user', last_name:'1'}])
})

module.exports = router