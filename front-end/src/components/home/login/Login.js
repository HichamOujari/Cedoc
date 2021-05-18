import React, { useContext, useState } from 'react'
import "./Login.css"
import Axios from "axios";
import {useHistory} from "react-router-dom";
import AuthApi from "./AuthApi";
import Cookies from 'js-cookie';

function Login() {

    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [message,setMessage]=useState("");
    
    const history = useHistory();

    const Auth = useContext(AuthApi);

    const Showpass=() =>{
        if(document.getElementById("check").checked==true)
        {
            document.getElementById("pass").setAttribute("type","text");
        }
        else{
            document.getElementById("pass").setAttribute("type","password");
        }
    }

    const login = () =>{
        Axios.post("http://localhost:3001/login/enseignant",{
            username : username,
            password : password
        }).then((response)=>{
            if(response.data.error)
            {
                setMessage(response.data.error);
            }
            else
            {
                if(response.data[0].specialite=="chef")
                {
                    Auth.setAuc(true);
                    Cookies.set("idc",response.data[0].id);
                    history.push("/chefenseignant");
                }
                else if(response.data[0].specialite=="ADMIN")
                {
                    Auth.setAuth(true);
                    Cookies.set("ida",response.data[0].id);
                    history.push("/admin");
                }
                else
                {
                    Auth.setAue(true);
                    Cookies.set("ide",response.data[0].id);
                    history.push("/enseignant");
                }
            }
        })
    }

    return (<>
        <div className="Login">
            <div className="back-login">
                <div className="form">
                    <div className="container">
                        <h1>Sign In</h1>
                            <div className="formulaire">
                                <p className="erreur">
                                    {message}
                                </p>
                                <p>
                                    <input className="inp1" type="text" placeholder="Enter Username" onChange={(e)=>setUsername(e.target.value)} required/>
                                </p>
                                <br/>
                                <p>
                                    <input id="pass" className="inp1" type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} required />
                                </p>
                                <p className="show">
                                    <input id="check" type="checkbox" onClick={Showpass}/> <label>Show password</label>
                                </p>
                                <p>
                                    <button onClick={login}>Sign In</button>
                                </p>
                                <p>
                                    <a style={{fontWeight:"bold",fontSize:"17px"}} href="/forget">Mot de passe oublié</a>
                                </p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login