import React from 'react';
import Navigation from "../home/navigation/Navigation";
import "./auth.css"
import bg from "../home/welcome/background-cedoc-home.png"

export default class Login extends  React.Component{
    render(){
        return(
            <div className="AuthPage">
                <Navigation />
                <div className="login">
                    <img className="bg" src={bg} alt="..." />
                    <form className="formLogin">
                        <p className="title">Log In</p>
                        <div className="InputForm">
                            <input type="text" placeholder="Entrer Username" />
                            <input type="password" placeholder="Entrer Password" />
                            <div className="checkboxSection">
                                <input type="checkbox" />
                                <label> Show password</label>
                            </div>
                            <input type="submit" value="Log In" />
                            <p className="Forget">Mot de passe oublié</p>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}