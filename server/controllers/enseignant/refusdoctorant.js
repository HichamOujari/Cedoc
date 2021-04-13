let connection = require("../config/db");

const Refusdoct = (s,req,res)=>
{
    connection.query("DELETE FROM `doctorant` WHERE 0 WHERE id = ?",[s],(err,result)=>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    })
};

module.exports = Refusdoct;