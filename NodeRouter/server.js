const express = require('express')
const router = require('./router')

const app = express()

const port = process.env.PORT || 3000

app.use('/api',router)

//Home
app.get('/', (req,res)=>{

    res.send("Welcome Home")
})


app.listen(port, ()=> {
    console.log(`Active on ${port}`)
})

