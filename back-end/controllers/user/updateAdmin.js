let connection = require("../../config/db");
const exec = require("../exec")

async function UpdateAdmin (res,req){
    const id = req.body.id
    const email = req.body.email;
    const ancienmp = req.body.ancienmp;
    const nouveaump = req.body.nouveaump;
    
    try{
        var rslt = await exec('update user set email=? ,  password = ? where password=Md5(?) and idUser=?',[email,nouveaump,ancienmp,id])
        if(rslt.error===true){
            res.send({
                error:true,
                message:rslt.message.sqlMessage
            })
        } 
    }catch(err){
        res.send({
            message:err.message.sqlMessage,
            error:true
        })
    }
};

module.exports = UpdateAdmin;