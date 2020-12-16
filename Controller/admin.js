const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const pool = require('../db')

const getAllUsers = (req,res) =>{
pool.query('SELECT * FROM users',(err,dbRes)=>{
    if(err) console.log('error',err)
    res.send(dbRes.rows)
})
}

const addAdmin = (req,res) =>{
    const {name,email,password}  = req.body
    pool.query('INSERT INTO users(name,email,password) VALUES ($1,$2,$3)',[name,email,password],(err,dbRes)=>{
        if(err) console.log('error',err)
        res.send(dbRes.rows)
    })
}

const getAdminDetails = (req,res) =>{
    // const hashedPassword = bcrypt.hashSync(req.body.password, 8);
    const token = jwt.sign({ id: 1234 }, 'secret', {
      expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).send({ auth: true, token });
}

const getUser = (req,res) =>{
    const {id}  = req.params
    pool.query('SELECT * FROM users WHERE id=$1',[id],(err,dbRes)=>{
        if(err) console.log('error',err)
        res.send(dbRes.rows)
    })
}

module.exports = {
    addAdmin,
    getAdminDetails,
    getAllUsers,
    getUser
}