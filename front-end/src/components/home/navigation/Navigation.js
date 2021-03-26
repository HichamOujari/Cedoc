import React from 'react';
import logo from './logoEMI.png';

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
                <div className="left-nav">
                    <div>
                        <li >
                            <img  width={100} height={65} src={logo} alt='logo'/>
                        </li>
                    </div>
                    <div style={{color: "white",fontSize:48,alignSelf:'flex-end',fontFamily:'Optima'}}>
                        <li >Cedoc EMI</li>
                    </div>

                </div>
                <div className="mid-nav">
                    <div className="mid-li">
                        Actualités
                    </div>

                    <div className=" mid-li dropdown">
                        Structure de recherche
                            <div className="dropdown-content-structures ">
                                <div className="d">
                                    Equipe
                                </div>
                                <div className="d" >
                                    Laboratoire
                                </div>
                                <div className="d" >
                                    Centre
                                </div>
                            </div>
                    </div>

                    <div className="mid-li dropdown">
                        Doctorant
                            <div className="dropdown-content-doctorant">
                                <div className="d">
                                    Inscription
                                </div>
                                <div className="d" >
                                    Réinscription
                                </div>
                            </div>
                    </div>
                    <div className="search-bar">
                        <li style={{marginLeft:40}}>
                            <input type="text" id="search" size={16}/>
                            <a href="#gg">
                                <img width={30} height={30} src={recherche} alt='recherche' />
                            </a>
                        </li>
                    </div>

                </div>
                <div className="right-nav">

                    <p id="login">Login </p>



                    <img style={{borderRadius:80,cursor:"pointer"}}  width={64} height={60} src={loginLogo} alt="logo" />

                </div>
            </ul>

        )

    }


}

export default Navigation;