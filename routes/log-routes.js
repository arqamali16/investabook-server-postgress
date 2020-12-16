const express = require('express')
const router = express.Router()

const adminController = require('../Controller/admin')

router.post('/login',adminController.getAdminDetails)
router.get('/users',adminController.getAllUsers)
router.get('/users/:id',adminController.getUser)
router.post('/signup',adminController.addAdmin)

module.exports = router
