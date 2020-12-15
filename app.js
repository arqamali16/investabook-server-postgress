const express = require('express')
const bodyParser = require('body-parser')
const port = process.env.PORT || 5000

const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

const loginRouter  = require('./routes/log-routes')
const paymentsRouter = require('./routes/payments')




app.use('/admin',loginRouter)

app.use('/payment',paymentsRouter)

app.use('/',(req,res)=>{
    res.send('<h1>Connected to Investabook-Server</h1>')
})

app.use((req,res)=>{
    res.status(400).send('<h1>Page not found</h1>')
})

app.listen(port,()=>{
    console.log(`Conncted to port ${port}`)
})