const express = require('express')
let router = express.Router()

const creds = {
    email:"dip@rawal.com",
    password: "dip123"
}

//Login
router.post('/login',(req,res)=>{
    if(req.body.email === creds.email && req.body.password === creds.password){
req.session.user = req.body.email
res.redirect('/route/dashboard')
//res.end("Logged In")
    }else{
        res.redirect('/route/invalid')
    }
})

//dashboard
router.get('/dashboard', (req,res)=>{
    req.session.user ? res.render('dashboard',{user: req.session.user}) : res.render('invalid')
})

//invalid
router.get('/invalid', (req,res)=>{
    if(!req.session.user){
        res.render('invalid')
    }
})


//logout
router.get('/logout',(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            console.log(err)
            res.send("Error: ",err)
        }
        else{
            res.render('base',{title: 'Login System', logout: 'You\'ve Been Logged Out Successfully'})
        }
    })
})

//Go back
router.get('/base', (req,res)=>{
        res.render('base')
    
})

module.exports = router