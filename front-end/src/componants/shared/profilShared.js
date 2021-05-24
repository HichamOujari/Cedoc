import React, { Component } from 'react';
import './style.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Axios from "axios"
import Cookies from "js-cookie"

const Input = ({title,type,placeholder,IsRequired})=>{
    return (<div className="TextInput">
        <p className="title">{title}</p>
        <input type={type} required={IsRequired} placeholder={placeholder}/>
    </div>)
}

class ProfilShared extends Component {
    state={
        passMod:0,
        data:{
            nom : "",
            prenom:"",
            grade : "",
            email:"",
            passMod:"",

        },
        status:"none",
        UpdateAdmin:"none",
        AdminSelected:this.InitialAdminSelected,

    }
    componentDidMount(){
        Axios.post("http://localhost:3001/auth/getInfosAccount",{
            id:Cookies.get("USERid")
        })
        .then(resp=>{
            this.setState({
                data:resp.data.data
            })
            console.log(resp.data)
        })
    }

    UpdateAdmin = (e)=>{
        e.preventDefault()
        const email = document.getElementById("IdUpdateAdminemail")
        const ancienmp = document.getElementById("IdUpdateAdminamp")
        const nouveaump = document.getElementById("IdUpdateAdminnmp")
        const confirmmp = document.getElementById("IdUpdateAdmincmp")

        Axios.post("http://localhost:3001/auth/UpdateAdmin",{
            id:this.state.AdminSelected.id,
            email:email.value,
            ancienmp:ancienmp.value,
            nouveaump:nouveaump.value,
            confirmmp:confirmmp.value,
        }).then(resp=>{
            if(resp.data.error===true) this.setState({
                isErrorAdd:true,
                MsgErro:resp.data.message,
            })
            else{
                this.setState({
                    UpdateAdmin:"none",
                    isErrorAdd:false
                })
                Axios.get("http://localhost:3001/auth/Admin")
                .then(resp=> {
                    if(resp.data.error===true){
                        //err
                    }else{
                        this.setState({
                            data:resp.data.data
                        })
                    }
                })
                console.log(resp.data)
            }
        })
    }
    render() {
        return (
            <form className="ProfilSharedComp">
                <div className="left">
                    <AccountCircleIcon className="icon"/>
                    <p className="name">Mr. {this.state.data.nom+" "+this.state.data.prenom}</p>
                    <p className="grade">{this.state.data.grade}</p>
                </div>
                <div className="right">
                    <Input title="email" type="email" placeholder={this.state.data.email}  />
                    <Input title="Ancien mot de passe" IsRequired={true} type={this.state.passMod%2===0?"password":"text"} placeholder=""  />
                    <Input title="Nouveau mot de passe" type={this.state.passMod%2===0?"password":"text"} placeholder=""  />
                    <Input title="Confirmer le nouveau mot de passe" type={this.state.passMod%2===0?"password":"text"} placeholder=""  />
                    <div className="CheckBoxInput">
                        <input id="idcheckboxprofiladmin" onChange={()=>this.setState({
                        passMod:this.state.passMod+1
                    })} type="checkbox" />
                        <label htmlFor="idcheckboxprofiladmin">Afficher le mot de passe</label>
                    </div>
                    <input type="submit" value="Valider" className="btnSubmit" />
                </div>
            </form>
        );
    }
}

export default ProfilShared;