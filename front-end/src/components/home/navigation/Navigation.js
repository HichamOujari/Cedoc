import React from 'react';
import logo from './logo.png';
import {Link} from "react-router-dom"
import loginLogo from './loginLogo.png';
import './Navigation.css';
import recherche from './recherche.png';

class Navigation extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render(){
        return(
            <ul className="navigation">
                <Link to="/" className="left-nav">
                    <div>
                        <li >
                            <img className="logoImageAcu"  width={300} height={65} src={logo} alt='logo'/>
                        </li>
                    </div>
                </Link>
                <div className="mid-nav">
                    <Link className="mid-li" to="/actualites">
                        
                            Actualités
                    </Link>

                    <div className=" mid-li dropdown">
                        Structures de recherche
                            <div className="dropdown-content-structures ">
                                <Link className="d" to="/structure-de-recherche/equipe">
                                    Equipe
                                </Link>
                                <Link className="d" to="/structure-de-recherche/equipe">
                                    Laboratoire
                                </Link>
                                <Link className="d" to="/structure-de-recherche/equipe">
                                    Centre
                                </Link>
                            </div>
                    </div>

                    <div className="mid-li dropdown">
                        Doctorant
                            <div className="dropdown-content-doctorant">

                                <Link to="/inscription" className="d">
                                    Inscription
                                </Link>
                                <Link to="/re-inscription"  className="d" >
                                    Réinscription
                                </Link>
                            </div>
                    </div>
                    <div className="search-bar">

                        <li style={{marginLeft:2,display:"flex"}}>
                            <input placeholder="recherche ..." type="text" id="search" size={16}/>
                            <a href="#gg">
                                <img width={20} style={{marginLeft:2}} height={20} src={recherche} alt='recherche' />
                            </a>
                        </li>
                    </div>

                </div>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} className="right-nav">
                    <Link to="/login" id="login">Login </Link>
                    <img style={{borderRadius:80,cursor:"pointer"}}  width={64} height={60} src={loginLogo} alt="logo" />
                </div>
            </ul>
        )
    }
}

export default Navigation;