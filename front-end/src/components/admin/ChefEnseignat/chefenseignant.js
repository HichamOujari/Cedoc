import React, { useState } from 'react'
import Nav from '../nav'
import SideBar from '../sideBar'
import "./chefenseignant.css"
import Axios from "axios"

function Chefenseignant(props) {

    const [sdr,setSdr]=useState([]);
    const [strr,setStrr] = useState("");
    const [docts,setDocts] = useState([]);

    Axios.post("http://localhost:3001/enseignant/"+props.match.params.id).then((response) => {
        setSdr(response.data)
    });

    Axios.post("http://localhost:3001/enseignantdoct/").then((response) => {
        setDocts(response.data)
    });

    return (
        <div className="Chefenseignant">
            <div className="mainn">
                <Nav/>
            </div>
            <div className="mains">
                <SideBar/>
            </div>
            <div className="container">
                <h4>Enseignants</h4>
                <br/>
                {
                    sdr.map(str=>(
                        <input hidden value={str.structure_de_recherche} onChange={(event)=>setStrr(event.target.value)}/>
                    ))
                }
                <p>Cedoc EMI / structures de recherches /Réseaux informatique</p>
                <div className="doct">
                    <p>Doctotants du Réseaux informatique</p>
                </div>
                <div className="tab">
                    <table>
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>Prénom</th>
                                <th>Email</th>
                                <th>Téléphone</th>
                                <th>Spécialité</th>
                                <th colSpan="2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {docts.map(doct=>(
                                <tr key={doct.id}>
                                    <td>{doct.nom}</td>
                                    <td>{doct.prenom}</td>
                                    <td>{doct.mail}</td>
                                    <td>{doct.tele}</td>
                                    <td>{doct.SpecialitéDiplome1}</td>
                                    <td className="acc">Accepter</td>
                                    <td className="ref">Refuser</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Chefenseignant
