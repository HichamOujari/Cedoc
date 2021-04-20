const express = require('express');
const bodyParser= require('body-parser');
const app = express();
const cors = require("cors");
const Login  = require('./controllers/login/login');
const Afficher = require('./controllers/enseignant/affenseignant');
const Afficherdoct = require('./controllers/enseignant/affdoctorants');
const AfficherSdr = require('./controllers/enseignant/affstructure');
const Refusdoct = require('./controllers/enseignant/refusdoctorant');
const AfficherEnseignant = require('./controllers/enseignant/afflistsenseignants');

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.post("/login/enseignant",(request,response)=>{
    const username = request.body.username;
    const password = request.body.password;;
   Login(username,password,request,response);
})

app.post("/enseignant",(request,response)=>{
    const idc = request.body.idc;
    Afficher(idc,request,response);
})

app.post("/listsdoct",(request,response)=>{
    const strr = request.body.strr;
    Afficherdoct(strr,request,response);
})

app.post("/listsenseignant",(request,response)=>{
    const strr = request.body.strr;
    console.log(strr);
    AfficherEnseignant(strr,request,response);
})

app.post("/enseignantsdr",(request,response)=>{
    const strr = request.body.strr;
    AfficherSdr(strr,request,response);
})

app.post("/doctorantdel/:id",(request,response)=>{
    const id = request.params.id;
    Refusdoct(id,request,response);
})

app.listen(3001, ()=>{
    console.log('app running on port 3001');
})