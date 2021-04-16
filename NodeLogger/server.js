const express = require('express')
const morgan = require('morgan')
const {v4:uuidv4} = require('uuid')
const fs = require('fs')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000

morgan.token('id',function getId(req){
    return req.id
})

morgan.token('param', function(req,res,param){
    return 'userToken'
})

app.use(assignId)

let accesslog = fs.createWriteStream(path.join(__dirname,'access.log'),{flags: 'a'})

app.use(morgan(':id :param :method :status :url "HTTP/:http-version '))
app.use(morgan(':id :param :method :status :url "HTTP/:http-version ',{stream: accesslog}))


app.get('/', (req,res)=>{
    res.send('Home Page')
})

function assignId(req,res,next){
    req.id = uuidv4()
    next()
}

app.listen(port, ()=>{
    console.log(`Active on port ${port}`)
})