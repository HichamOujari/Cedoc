let connection = require("../config/db");

const AfficherSdr = (s,req,res)=>
{
    connection.query("SELECT * FROM structurederecherche WHERE id = ?",[s],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
};

module.exports = AfficherSdr;