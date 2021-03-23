import React from 'react';
import logo from './logoEMI.png';

import loginLogo from './loginLogo.png';
import './Navigation.css';
import recherche from './recherche.png';

const Navigation = ()=>{
    return(
            <ul className="navigation">
                <div className="left-nav">
                    <div>
                        <li >
                            <img  width={120} height={85} src={logo} alt='logo'/>
                        </li>
                    </div>
                    <div style={{color: "white",fontSize:48,alignSelf:'flex-end'}}>
                        <li >Cedoc EMI</li>
                    </div>

                </div>
                <div className="mid-nav">
                    <div className="mid-li">
                        Actualité
                    </div>
                    <div className="mid-li">
                        Structure de recherche
                    </div>
                    <div className="mid-li">
                        Doctorant
                    </div>
                    <div className="search-bar">
                        <li style={{marginLeft:40}}>
                            <input type="text" id="search" size={10}/>
                            <a href="#gg">
                                <img width={30} height={30} src={recherche} alt='recherche' />
                            </a>
                        </li>
                    </div>

                </div>
                <div className="right-nav">
                    <div style={{marginRight:60,cursor:"pointer"}} >
                        <p id="login">Login </p>
                    </div>

                    <div >
                        <img style={{borderRadius:80,cursor:"pointer"}}  width={64} height={70} src={loginLogo} alt="logo" />
                    </div>
                </div>
            </ul>

    )
}

export default Navigation;