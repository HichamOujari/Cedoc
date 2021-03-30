import React, { Component } from 'react';
import Nav from "./nav.js"
import "./style/ListDoctorant.css"
import SideBar from "./sideBar.js"
import BackupIcon from '@material-ui/icons/Backup';
import { SheetJSFT } from './excelToJson/types';
import XLSX from 'xlsx';
import { make_cols } from './excelToJson/MakeColumns';

export default class ListDoctorant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: {},
      data: [],
      cols: []
    }
    this.handleFile = this.handleFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const files = e.target.files;
    if (files && files[0]) this.setState({ file: files[0] });
  }
  handleFile() {
    const reader = new FileReader();
    const rABS = !!reader.readAsBinaryString;
 
    reader.onload = (e) => {
      const bstr = e.target.result;
      const wb = XLSX.read(bstr, { type: rABS ? 'binary' : 'array', bookVBA : true });
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      const data = XLSX.utils.sheet_to_json(ws);
      this.setState({ data: data, cols: make_cols(ws['!ref']) }, () => {
        console.log(this.state.data);
        //console.log(JSON.stringify(this.state.data, null, 2));
      });
 
    };
 
    if (rABS) {
      reader.readAsBinaryString(this.state.file);
    } else {
      reader.readAsArrayBuffer(this.state.file);
    };
  }
  render() {
    return (
      <div className="ListDoctorant">
        <SideBar Id={1}  className="left"/>
        <div className="main">
          <Nav />
          <div className="Content">
            <p className="path">Cedoc EMI  / Doctorants préinscrits /</p>
            <div className="ImportExcel">
              <p className="Title">Import Excel</p>
              <div onClick={()=>{
              document.getElementById("ExcelInput").click()
            }} className="Upload">
                <input type="file" accept={SheetJSFT} onChange={this.handleChange}  hidden id="ExcelInput"/>
                <BackupIcon className="Icon"/>
                <p className="text">Drop files here to upload</p>
              </div>
              <button onClick={this.handleFile} className="SubmitImport">Confirmer</button>
            </div>
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
                    <th>Structure de Recherche</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.data.map((ele,index)=>{
                    return (<tr key={index}>
                      <td>{ele.NOM}</td>
                      <td>{ele.PRENOM}</td>
                      <td>{ele.CNE}</td>
                      <td>{ele.CNI}</td>
                      <td>{ele.EMAIL}</td>
                      <td>{ele.STRUCTURE_DE_RECHERCHE}</td>
                    </tr>)
                  })}
                  <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
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