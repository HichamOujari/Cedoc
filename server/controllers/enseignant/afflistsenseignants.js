let connection = require("../config/db");

const AfficherEnseignant = (u,req,res)=>{
    connection.query("SELECT * FROM enseignant WHERE structurederecherche = ? and specialite!='chef'",[u],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
}

module.exports = AfficherEnseignant;