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
    res.send('<h1>Added an Admin</h1>')
}

const getAdminDetails = (req,res) =>{
    // const hashedPassword = bcrypt.hashSync(req.body.password, 8);
    const token = jwt.sign({ id: 1234 }, 'secret', {
      expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).send({ auth: true, token });
}

module.exports = {
    addAdmin,
    getAdminDetails,
    getAllUsers
}