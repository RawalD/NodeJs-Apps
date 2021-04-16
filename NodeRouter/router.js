const express = require('express')
const route = express.Router()

const accounts = require('./database')


//GET
route.get('/accounts', (req,res)=>{
    res.json({userData: accounts})
})

//POST
route.post('/accounts',(req,res)=>{
    const newAcc = req.body
    accounts.push(newAcc)
    res.json(accounts)
})

module.exports = route