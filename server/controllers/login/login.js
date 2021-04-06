let connection = require("../config/db");

const Login = (u,p,req,res) =>{
    connection.query("select * from users where user = ? and password = ?",
    [u,p],
    (err,result)=>{
        if(err){
            console.log(err);
        }
        if(result.length>0){
            res.send(result);
        }
        else{
            res.send({error : "Incorrect email or password !"});
        }
    })
}

module.exports = Login;