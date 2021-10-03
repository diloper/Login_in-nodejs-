const express = require('express');
const path =require('path');
const app=express();
const bodyparser = require("body-parser");
const session = require("express-session");
const router = require('./router');
const { v4: uuidv4 } = require("uuid");
const port =process.env.PORT || 3000;



app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }))

app.set('view engine', 'ejs');
app.use('/static',express.static(path.join(__dirname,'public')));
app.use('/assets',express.static(path.join(__dirname,"public/assets")));

app.use(session({
    secret: uuidv4(), //  '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
    resave: false,
    saveUninitialized: true
}));

app.use('/route', router);

app.get('/',(req,res)=>{
    res.render('base',{title : 'Login System'});
});
app.listen(port,()=>{
    // reference to variable use (`)grave accent
    console.log(`listen on http://localhost:${port}`);
});

