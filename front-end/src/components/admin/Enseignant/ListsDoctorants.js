import React, { useState } from 'react'
import Nav from '../nav'
import SideBar from './sidebar'
import "../ChefEnseignat/chefenseignant.css"
import Axios from "axios"
import Cookies from 'js-cookie'

function Chefenseignant(props) {

    const [sdr,setSdr]=useState([]);
    const [strr,setStrr] = useState(0);
    const [docts,setDocts] = useState([]);
    const [sdrr,setSdrr]=useState([]);
    const [idd,setId]=useState(0);
    const idc = 0;
    const i = 0;

    Axios.post("http://localhost:3001/enseignant",{
        idc : Cookies.get("ide")
    }).then((response) => {
        setStrr(response.data[0].structurederecherche);
    });

    Axios.post("http://localhost:3001/listsdoct",{strr : strr}).then((response) => {
        setDocts(response.data)
    });

    Axios.post("http://localhost:3001/enseignantsdr",{strr : strr}).then((response) => {
        setSdrr(response.data)
    });

    const deleteDoct = (id) =>{
       // Axios.delete(`http://localhost:3001/doctorantdel/${id}`).then((response) => {
           
         // });
        };

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
                {sdrr.map(sdrs=>(
                    <p key={sdrs.id}>Cedoc EMI / {sdrs.nom} / Doctorants preinscrire</p>
                ))}
                
                <div className="doct">
                    {sdrr.map(sdrs=>(
                        <p key={sdrs.id}>Doctorants du {sdrs.nom}</p>
                    ))}
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
                            {docts.map(doct=>(
                                <tr key={doct.id}>
                                    <td>{doct.nom}</td>
                                    <td>{doct.prenom}</td>
                                    <td>{doct.mail}</td>
                                    <td>{doct.tele}</td>
                                    <td>{doct.SpecialitéDiplome1}</td>
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
