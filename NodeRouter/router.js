const express = require('express')
const route = express.Router()

var accounts = require('./database')


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

//PUT
route.put('/accounts/:id',(req,res)=>{
    const accountId = Number(req.params.id)
    const body = req.body
    const account = accounts.find((account) => account.id === accountId)
    const index = accounts.indexOf(account)

    if (!account) {
            res.status(500).send('No matching account found')
    } else {
        const updatedAcc = {...account, ...body}
        accounts[index] = updatedAcc
        res.send(updatedAcc)
    }
})

//DELETE
route.delete('/accounts/:id',(req,res)=>{
    const accountId = Number(req.params.id)
    const newAccounts = accounts.filter((account) => account.id !== accountId)
  

    if(!newAccounts){
        res.status(500).send('No matching account found')
    }
    else{
        accounts = newAccounts
        res.send(accounts) 
    }

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