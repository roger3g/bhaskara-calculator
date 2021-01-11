const router = require('express').Router()
const { pageHome } = require('./../controllers/pageHome.js')

router.get('/', pageHome)

module.exports = router
