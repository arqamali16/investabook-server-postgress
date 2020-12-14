const express = require('express')
const router = express.Router()

const paymentsController = require('../Controller/payments')

router.get('/',paymentsController.getPayments)
router.post('/',paymentsController.addPayment)
router.get('/:payment_id',paymentsController.getPayment)

module.exports = router
