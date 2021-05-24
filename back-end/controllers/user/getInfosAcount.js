let connection = require("../../config/db");

const getInfosAcount = (res,req)=>{   
    const iduser = req.body.id;
    console.log(iduser)
    connection.query("select enseignant.nom,enseignant.prenom,user.email,grade.name as grade from user,enseignant,grade where grade.id=enseignant.grade and user.idUser=enseignant.id and user.id=?",[iduser],(err,result)=>{
        if(err || result.length==0){
            res.send({
                error:true,
            })
        }else{
            res.send({
                data:result[0],
                error:false
            });
        }
    })
};


module.exports = getInfosAcount;