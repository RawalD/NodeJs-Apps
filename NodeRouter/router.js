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

route.get('/accounts/:id', (req,res)=>{
    const accountId = Number(req.params.id)
    const getAccount = accounts.find((account) => account.id === accountId)

    if(!getAccount){
        res.status(500).send("No Account Found")
    }else{
    res.json({userData: [getAccount]})
    }
})

module.exports = route