const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({extended:false}))


// const Payment = require('../Model/payments')

const getPayments = (req,res) =>{
    // const payments =  Payment.getPayments()
     res.send(payments)
}

const getPayment = (req,res) =>{
    const payment_id = req.params.payment_id
    // Payment.getPaymentsById(payment_id)
}

const addPayment = (req,res) =>{
    // const payment = new Payment(req.body.date,req.body.amount,req.body.reciever,req.body.payer)
    // payment.add()
    res.send('added')
}

module.exports ={
    getPayments,
    addPayment,
    getPayment
}