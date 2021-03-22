import React from 'react';
import logo from './logoEMI.png';

import loginLogo from './loginLogo.png';
import './Navigation.css';
import recherche from './recherche.png';

const Navigation = ()=>{
    return(
            <ul className="navigation">
                <li >
                        <img  width={120} height={85} src={logo} alt='logo'/>
                </li>
                <li className="text-logo">Cedoc EMI</li>

                <div className="mid-nav">
                    <div className="mid-li">
                        <li ><a href="#gg">Actualité</a></li>
                    </div>
                    <div className="mid-li">
                        <li><a href="#gg">Structure de recherche</a></li>
                    </div>
                    <div className="mid-li">
                        <li ><a href="#gg">Doctorant</a></li>
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
                <li style={{marginLeft:"auto"}}>
                    <a href="#gg">Login </a>
                    <a href="#gg">
                        <img style={{borderRadius:80}}  width={64} height={70} src={loginLogo} alt="logo" />
                    </a>
                </li>
            </ul>

    )
}

export default Navigation;