import React from 'react';
<<<<<<< HEAD
import logo from './logoEMI.png'; 
=======
import logo from './logo.png';
import {Link} from "react-router-dom"
>>>>>>> e48892900267df2bea7ba978ddf6b7abae33d12f
import loginLogo from './loginLogo.png';
import './Navigation.css';
import recherche from './recherche.png';
import { NavLink } from 'react-router-dom';

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
<<<<<<< HEAD
                    <div style={{color: "white",fontSize:43,alignSelf:'flex-end',fontFamily:'Optima'}}>
                        <li >Cedoc EMI</li>
                    </div>
=======
                    
>>>>>>> e48892900267df2bea7ba978ddf6b7abae33d12f

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
<<<<<<< HEAD
                                <div className="d">
                                    <NavLink style={{textDecoration: 'none',color : "white"}} exact to="/doctorant/inscription">Inscription</NavLink>
                                </div>
                                <div className="d" >
=======
                                <Link to="/inscription" className="d">
                                    Inscription
                                </Link>
                                <Link to="/re-inscription"  className="d" >
>>>>>>> e48892900267df2bea7ba978ddf6b7abae33d12f
                                    Réinscription
                                </Link>
                            </div>
                    </div>
                    <div className="search-bar">
<<<<<<< HEAD
                        <li style={{marginLeft:20}}>
                            <input type="text" id="search" size={12}/><span style={{opacity : 0}}>j</span>
=======
                        <li style={{marginLeft:2,display:"flex"}}>
                            <input placeholder="recherche ..." type="text" id="search" size={16}/>
>>>>>>> e48892900267df2bea7ba978ddf6b7abae33d12f
                            <a href="#gg">
                                <img width={20} style={{marginLeft:2}} height={20} src={recherche} alt='recherche' />
                            </a>
                        </li>
                    </div>

                </div>
<<<<<<< HEAD
                <div className="right-nav">

                    <p id="login"><NavLink style={{textDecoration: 'none'}} exact to="/cedoc/login">Login</NavLink> </p>



=======
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}} className="right-nav">
                    <Link to="/login" id="login">Login </Link>
>>>>>>> e48892900267df2bea7ba978ddf6b7abae33d12f
                    <img style={{borderRadius:80,cursor:"pointer"}}  width={64} height={60} src={loginLogo} alt="logo" />
                </div>
            </ul>
        )
    }
}

export default Navigation;