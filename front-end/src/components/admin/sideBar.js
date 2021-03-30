import React, { Component } from 'react';
import {Link} from "react-router-dom"
import SchoolIcon from '@material-ui/icons/School';
import FaceIcon from '@material-ui/icons/Face';
import SyncAltIcon from '@material-ui/icons/SyncAlt';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
export default class SideBar extends Component {
  render() {
    return (
      <div className="SideBar">
        <div className="bg"></div>
          <div className="logo">
            <SchoolIcon className="Icon" />
            <h3 className="title">Cedoc <span>EMI</span></h3>
          </div>
          <ul className="Elements">
            <Link to="/admin/"><li><DashboardIcon className="Icon" /> <p>Dashboard</p></li></Link>
            <Link to="/admin/doctorants"><li className="active"><FaceIcon className="Icon" /> <p>Doctorants préinscrits</p></li></Link>
            <Link to="/admin/enseignants"><li ><SupervisorAccountIcon className="Icon" /> <p>Gerer les enseignants</p></li></Link>
            <Link to="/admin/structure-recherche"><li ><SyncAltIcon className="Icon" /> <p>Structure de recherche</p></li></Link>
          </ul>
      </div>
    );
  }
}
