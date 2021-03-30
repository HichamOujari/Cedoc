import React, { Component } from 'react';
import Nav from "./nav.js"
import "./style/ListDoctorant.css"
import SideBar from "./sideBar.js"

export default class ListEnseignants extends Component {
  render() {
    return (
      <div className="ListDoctorant">
        <SideBar Id={2}  className="left"/>
        <div className="main">
          <Nav />
          <div className="Content">
            <p className="path">Cedoc EMI  / List des Enseignants /</p>
            <div className="AfficheTable">
              <p className="title">Tableau d'affichage</p>
              <table>
                <thead>
                  <tr>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>CNE</th>
                    <th>CNI</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Oujari</td>
                    <td>Hicham</td>
                    <td>H11111111</td>
                    <td>FB111111</td>
                    <td>hichamoujari99@gmail.com</td>
                  </tr>
                  <tr>
                    <td>Oujari</td>
                    <td>Hicham</td>
                    <td>H11111111</td>
                    <td>FB111111</td>
                    <td>hichamoujari99@gmail.com</td>
                  </tr>
                </tbody>
                <tfoot></tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}