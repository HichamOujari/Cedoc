import React, { Component } from 'react';
import Nav from "./nav.js"
import "./style/ListDoctorant.css"
import SideBar from "./sideBar.js"

export default class ListStructure extends Component {
  render() {
    return (
      <div className="ListDoctorant">
        <SideBar Id={0} className="left"/>
        <div className="main">
          <Nav />
        </div>
      </div>
    );
  }
}