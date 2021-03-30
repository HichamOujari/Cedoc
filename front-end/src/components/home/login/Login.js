import React from 'react'
import "./Login.css"

function Login() {
    return (<>
        <div className="back-login">
            <div className="form">
                <div className="container">
                    <h1>Sing In</h1>
                        <form action="/admin/" className="formulaire">
                            <p>
                                <input className="inp1" type="text" placeholder="Enter Username" required/>
                            </p>
                            <br/>
                            <p>
                                <input className="inp1" type="password" placeholder="Enter Password" required />
                            </p>
                            <p className="show">
                                <input type="checkbox"/> <label>Show password</label>
                            </p>
                            <p>
                                <button>Sing In</button>
                            </p>
                            <p>
                                <a href="/forget">Mot de passe oublié</a>
                            </p>
                        </form>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login