import React, { Component } from 'react';
import Nav from "./nav.js"
import "./style/ListDoctorant.css"
import SideBar from "./sideBar.js"

export default class ListStructure extends Component {
  render() {
    return (
      <div className="ListDoctorant">
        <SideBar Id={3} className="left"/>
        <div className="main">
          <Nav />
          <div className="Content">
            <p className="path">Cedoc EMI  / List des structures de recherche /</p>
            <div className="AfficheTable">
              <p className="title">Tableau d'affichage</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}