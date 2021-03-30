import React, { Component } from 'react';
import Title from "../outils/title"

export default class MainActualite extends Component {
  Attribute = ["Nom","Prénom","CNE","Equipe","Encadrant"]
  data = [
        {
            nom:"Oujari",
            prenom:"Hicham",
            CNE:"FB11111",
            equipe:"Big DATA",
            Encadrant:"El-Faddouli"
        },{
            nom:"Oujari",
            prenom:"Hicham",
            CNE:"FB11111",
            equipe:"Big DATA",
            Encadrant:"El-Faddouli"
        },{
            nom:"Oujari",
            prenom:"Hicham",
            CNE:"FB11111",
            equipe:"Big DATA",
            Encadrant:"El-Faddouli"
        },{
            nom:"Oujari",
            prenom:"Hicham",
            CNE:"FB11111",
            equipe:"Big DATA",
            Encadrant:"El-Faddouli"
        }
  ]
  render() {
    return (
      <div className="MainActualite">
          <Title title="Actualités"/>
          <div className="TableSection">
            <p className="title">Résultat de préselection</p>
            <table className="table">
                <thead>
                    <tr>
                        {this.Attribute.map((ele,index)=>{
                            return (<th key={index}>{ele}</th>)
                        })}
                    </tr>
                </thead>
                <tbody>
                      {this.data.map((ele,index)=>{
                            return (<>
                                <tr>
                                    <td key={index}>{ele.nom}</td>
                                    <td key={index}>{ele.prenom}</td>
                                    <td key={index}>{ele.CNE}</td>
                                    <td key={index}>{ele.CNI}</td>
                                    <td key={index}>{ele.equipe}</td>
                                    <td key={index}>{ele.Encadrant}</td>
                                </tr>
                              </>
                            )
                        })}
                </tbody>
                <tfoot></tfoot>
            </table>
        </div>
        </div>
    );
  }
}