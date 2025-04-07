const express = require('express')
const ticket_router = require('./goals')

const router = express.Router()

// registering child routers
router.use('/ticket', ticket_router)
module.exports = router