import React, { Component } from 'react';
import style from "./style/ListDoctorant.css"
import Nav from "./nav.js"
import SideBar from "./sideBar.js"
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
export default class ListDoctorant extends Component {
  render() {
    return (
      <div className="ListDoctorant">
        <SideBar className="left"/>
        <div className="main">
          <Nav />
          <div className="Content">
            <p className="path">Cedoc EMI  / Doctorants préinscrits /</p>
            <div className="ImportExcel">
              <p className="Title">Import Excel</p>
              <div onClick={()=>{
              document.getElementById("ExcelInput").click()
            }} className="Upload">
                <input type="file" hidden id="ExcelInput"/>
                <CloudUploadIcon className="Icon"/>
                <p className="text">Drop files here to upload</p>
              </div>
              <button className="SubmitImport">Confirmer</button>
            </div>
            <div className="AfficheTable">
              <p className="title">Tableau d'affichage</p>
              <table>
                <tr>
                  <th>Nom</th>
                  <th>Prenom</th>
                  <th>CNE</th>
                  <th>CNI</th>
                  <th>Email</th>
                  <th>Diplome</th>
                  <th>Specialité</th>
                </tr>
                <tbody>
                  <tr>
                    <td>Oujari</td>
                    <td>Hicham</td>
                    <td>H11111111</td>
                    <td>FB111111</td>
                    <td>hichamoujari99@gmail.com</td>
                    <td>Ingenieur d'etat</td>
                    <td>Genie informatique</td>
                  </tr>
                  <tr>
                    <td>Oujari</td>
                    <td>Hicham</td>
                    <td>H11111111</td>
                    <td>FB111111</td>
                    <td>hichamoujari99@gmail.com</td>
                    <td>Ingenieur d'etat</td>
                    <td>Genie informatique</td>
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