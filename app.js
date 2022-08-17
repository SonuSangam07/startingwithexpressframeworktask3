
//const http=require('http');
const express=require('express');
const bodyParser=require('body-parser');
const app=express();
app.use(bodyParser.urlencoded());

app.use('/add-product',(req,res,next)=>{
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="Number" name="size"><button type="submit">Submit</button></form>');
   
   
});
app.use('/product',(req,res,next)=>{
    
    console.log(req.body);
    res.redirect('/');
    
});

app.use('/',(req,res,next)=>{
    res.send('<h1> Hello from express1</h1>');
    console.log('done');
    
});
app.listen(3000);