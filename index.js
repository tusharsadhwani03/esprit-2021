/* Importing required modules */
var express = require('express');

// Init app
var app = express();
app.use(express.static('public'));

app.set('view engine','ejs');

var PORT = process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log("connection done...");
})

app.get('/',(req,res)=>{
    res.render('home');
})

app.get('/schedule',(req,res)=>{
    res.render('schedule');
})

app.get('/gallery',(req,res)=>{
    res.render('gallery');
})

app.get('/videos',(req,res)=>{
    res.render('videos');
})