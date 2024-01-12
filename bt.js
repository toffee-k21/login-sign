const express = require('express')
const app = express()
const mongoose = require('mongoose')

//POST INCLUSION 
app.use(express.urlencoded())

mongoose.connect('mongodb://127.0.0.1:27017/loginData',{useNewUrlParser: true})
// app.get('/',(req,res)=>{
//     res.send('hello')
// })


const sch = new mongoose.Schema({
    email: String,
    password: String //capital letter m hoga sting ka s wrna msla ho ga
});

const toffee = mongoose.model('cat', sch);

// const insrt = new toffee({email:})


app.listen(175,'127.0.0.1',()=>{
console.log('strt hogya')
})

app.set('view engine', 'pug')

app.use('/static',express.static('static'))

app.get('/',(req,res)=>{
    res.render('index.pug')
})
app.post('/',(req,res)=>{
    res.render('index.pug')
    console.log(req.body.password)
    const insrt = new toffee({email: req.body.email, password : req.body.password})

    insrt.save().then(()=>{
        console.log('insert ho gya data')
    })

    
})