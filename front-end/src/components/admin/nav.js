import React, { Component, useContext } from 'react';
import "./style/nav_sideBar.css"
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Cookies from 'js-cookie';
import AuthApi from '../home/login/AuthApi';
import { useHistory } from 'react-router';
export default function Nav () {

    const Auth = useContext(AuthApi);
    const history = useHistory();
    const aaaa = ()=>{
        Auth.setAuth(false);
        Cookies.remove("ida");
        Auth.setAuc(false)
        Cookies.remove("idc");
        Auth.setAue(false);
        Cookies.remove("ide");
    };
    return (
      <div className="NavBarAdmin">
        <div className="SearchBar">
          <input type="text" placeholder="Recherche ..." className="InputSearch" />
          <SearchIcon className="Icon" />
        </div>
        <div className="right">
          <NotificationsIcon className="Icon"/>
          <PersonIcon className="Icon" id="icon" onClick={aaaa}/>
        </div>
      </div>
    );
  }
