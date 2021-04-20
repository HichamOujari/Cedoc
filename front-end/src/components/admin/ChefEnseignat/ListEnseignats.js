import React, { useState } from 'react'
import Nav from '../nav'
import SideBar from './sideBarEnseignant'
import "./ListEnseignant.css"
import Cookies from 'js-cookie';
import Axios from 'axios';

function ListEnseignats() {

    const idc = 0;
    const [strr,setStrr] = useState(0);
    const [sdrr,setSdrr]=useState([]);
    const [ens , setEns] = useState([]);

    Axios.post("http://localhost:3001/enseignant",{
        idc : Cookies.get("idc")
    }).then((response) => {
        setStrr(response.data[0].structurederecherche);
    });

    Axios.post("http://localhost:3001/enseignantsdr",{strr : strr}).then((response) => {
        setSdrr(response.data)
    });

    Axios.post("http://localhost:3001/listsenseignant",{strr : strr}).then((response) => {
        setEns(response.data)
    });

    return (
        <div className="ListEnseignants">
            <div className="mainn">
                <Nav/>
            </div>
            <div className="mains">
                <SideBar/>
            </div>
            <div className="container">
                <h4>Chef d'équipe</h4>
                <br/>
                {sdrr.map(sdrs=>(
                    <p key={sdrs.id}>Cedoc EMI / {sdrs.nom} / Liste des enseignants</p>
                ))}
                <div className="listes">
                    <p>La liste des enseignants</p>
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
                            </tr>
                        </thead>
                        <tbody>
                            {ens.map(ense=>(
                                <tr key={ense.id}>
                                    <td>{ense.nom}</td>
                                    <td>{ense.prenom}</td>
                                    <td>{ense.grade}</td>
                                    <td>{ense.tele}</td>
                                    <td>{ense.specialite}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ListEnseignats
