const express = require('express')

const port = process.env.PORT || 3000

const app = express()

app.get('/', (req,res)=>{
    res.send("User Management System")
})

app.listen(port,()=> console.log(`Active on port ${port}`))