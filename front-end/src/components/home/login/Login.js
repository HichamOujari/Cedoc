import React, { useState } from 'react'
import "./Login.css"
import Axios from "axios";
import {useHistory} from "react-router-dom";

function Login() {

    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    const [message,setMessage]=useState("");

    const history = useHistory();

    window.history.forward();

    const login = () =>{
        Axios.post("http://localhost:3001/login",{
            username : username,
            password : password
        }).then((response)=>{
            if(response.data.error)
            {
                setMessage(response.data.error);
            }
            else
            {
                history.push("/admin");
            }
        })
    }

    return (<>
        <div className="back-login">
            <div className="form">
                <div className="container">
                    <h1>Sign In</h1>
                        <div className="formulaire">
                            <p>
                                {message}
                            </p>
                            <p>
                                <input className="inp1" type="text" placeholder="Enter Username" onChange={(e)=>setUsername(e.target.value)} required/>
                            </p>
                            <br/>
                            <p>
                                <input className="inp1" type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} required />
                            </p>
                            <p className="show">
                                <input type="checkbox"/> <label>Show password</label>
                            </p>
                            <p>
                                <button onClick={login}>Sign In</button>
                            </p>
                            <p>
                                <a href="/forget">Mot de passe oublié</a>
                            </p>
                        </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login