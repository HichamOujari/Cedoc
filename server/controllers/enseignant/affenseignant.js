let connection = require("../config/db");

const Afficher = (u,req,res) =>{
    connection.query("SELECT * FROM enseignant WHERE id = ? ",[u],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
}

module.exports = Afficher;