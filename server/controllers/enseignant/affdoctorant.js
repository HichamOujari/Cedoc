let connection = require("../config/db");

const Afficher = (u,req,res) =>{
    connection.query("SELECT * FROM enseignant WHERE id = ?",[u],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
}

const Afficherdoct = (u,req,res)=>{
    connection.query("SELECT * FROM doctorant WHERE id = ?",[u],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
}

module.exports = Afficher;
module.exports = Afficherdoct;