const express = require('express');
const bodyParser= require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.send('<h1>hello world</h1>');
})

app.listen(3000, ()=>{
    console.log('app running on port 3000');
})
