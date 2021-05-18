let connection = require("../config/db");

const Afficherdoct = (u,req,res)=>{
    connection.query("SELECT * FROM doctorant WHERE StructureRecherche = ?",[u],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
}

module.exports = Afficherdoct;