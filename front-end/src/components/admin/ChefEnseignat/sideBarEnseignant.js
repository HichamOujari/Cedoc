import React, { Component } from 'react';
import {Link} from "react-router-dom"
import SchoolIcon from '@material-ui/icons/School';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
export default class SideBar extends Component {
  sideBarEle = [
    {
      title:"Dashboard",
      icon:<DashboardIcon className="Icon" />,
      lien:"/chefenseignant"
    },{
      title:"Gerer les doctorants",
      icon:<SupervisorAccountIcon className="Icon" />,
      lien:"/chefenseignant/doctorants"
    },{
      title:"Enseignants",
      icon:<SupervisorAccountIcon className="Icon" />,
      lien:"/chefenseignant/enseignants"
    },
  ]
  render() {
    return (
      <div className="SideBar">
        <div className="bg"></div>
          <div className="logo">
            <SchoolIcon className="Icon" />
            <h3 className="title">Cedoc <span>EMI</span></h3>
          </div>
          <ul className="Elements">
            {this.sideBarEle.map((ele,index)=>{
                return (<Link key={index} to={ele.lien}><li className={this.props.Id===index?"active":null}>{ele.icon} <p>{ele.title}</p></li></Link>)
            })}
          </ul>
      </div>
    );
  }
}