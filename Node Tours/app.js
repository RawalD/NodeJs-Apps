const express = require('express')

const app = express()

app.get('/',(req,res)=>{
    res.status(200).send('Server sided response')
})

const PORT = 3000

app.listen(PORT, ()=>{
    console.log(`Running on port ${PORT}`)
})