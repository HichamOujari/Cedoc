import React, { Component } from 'react';
import "./style/nav_sideBar.css"
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
export default class Nav extends Component {
  render() {
    return (
      <div className="NavBarAdmin">
        <div className="SearchBar">
          <input type="text" placeholder="Recherche ..." className="InputSearch" />
          <SearchIcon className="Icon" />
        </div>
        <div className="right">
          <NotificationsIcon className="Icon"/>
          <PersonIcon className="Icon"/>
        </div>
      </div>
    );
  }
}
