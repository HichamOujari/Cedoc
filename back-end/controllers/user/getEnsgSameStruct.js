let connection = require("../../config/db");

const getEnsgSameStruct = (res,req)=>{   
    const userid = req.body.userid
    connection.query("select enseignant.id,concat(enseignant.nom,' ',enseignant.prenom) as nom from enseignant,user where enseignant.id=user.idUser and enseignant.stucture_recherche in (select enseignant.stucture_recherche from enseignant,user where user.idUser=enseignant.id and user.id=?) and enseignant.id not in (select these.EncadrantID from these where these.EncadrantID is not null)",[userid],(err,result)=>{
        if(err){
            res.send({
                error:true,
                msg:err
            })
        }else{
            res.send({
                error:false,
                data:result
            });
        }
    })
};


module.exports = getEnsgSameStruct;