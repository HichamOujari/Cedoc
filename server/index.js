const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const cors = require("cors");
const connection = require('./controllers/config/db');
const Login  = require('./controllers/login/login');

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.post("/login",(request,response)=>{
    const username = request.body.username;
    const password = request.body.password;;
   Login(username,password,request,response);
})

app.listen(3001, ()=>{
    console.log('app running on port 3001');
})