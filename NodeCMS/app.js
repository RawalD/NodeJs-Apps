const express = require('express')
const path = require('path')
const expresshbs = require('express-handlebars')

const app = express()

//Middleware
app.use(express.static(path.join(__dirname, 'public')))

app.engine('handlebars', expresshbs({defaultLayout: 'home'}))
app.set('view engine', 'handlebars')

app.get('/',(req,res)=>{
    res.render('home/index')
})

app.get('/about',(req,res)=>{
    res.render('home/about')
})

app.listen(3000, ()=>console.log(`Active on port 3000`))
