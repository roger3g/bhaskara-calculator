const router = require('express').Router()
const { page404 } = require('./../controllers/page404.js')

router.get('*', page404)

module.exports = router
