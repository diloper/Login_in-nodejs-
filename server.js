const express = require('express');
  
const app=express();

const port =process.env.PORT || 3000;

app.set('view engine', 'ejs');
// app.set("view engin",'ejs');
app.get('/',(req,res)=>{
    res.render('base',{title : 'Login System'});
});
app.listen(port,()=>{
    // reference to variable use (`)grave accent
    console.log(`listen on http://localhost:${port}`);
});

