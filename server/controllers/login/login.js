let connection = require("../config/db");

const Login = (u,p,req,res) =>{
    connection.query("select * from enseignant where username = ? and password = ?",
    [u,p],
    (err,result)=>{
        if(err){
            console.log(err);
        }
        if(result.length>0){
            res.send(result);
        }
        else{
            res.send({error : "Incorrect username or password !"});
        }
    })
}

module.exports = Login;