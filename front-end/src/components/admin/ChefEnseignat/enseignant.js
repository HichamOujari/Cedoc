import React , {useState} from 'react'
import Nav from '../nav'
import SideBar from '../sideBar'
import "./chefenseignant.css"
import Axios from "axios"

function Enseignant(props) {

    const [sdr,setSdr]=useState([]);
    const [strr,setStrr] = useState(0);
    const [docts,setDocts] = useState([]);
    const [sdrr,setSdrr]=useState([]);

    /*Axios.post("http://localhost:3001/enseignant/"+props.match.params.id).then((response) => {
        setStrr(response.data[0].structurederecherche);
        setSdr(response.data);
    });

    Axios.post("http://localhost:3001/enseignantdoct/",{strr : strr}).then((response) => {
        setDocts(response.data);
    });

    Axios.post("http://localhost:3001/enseignantsdr/",{strr : strr}).then((response) => {
        setSdrr(response.data);
    });*/


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
                    <p key={sdrs.id}>Cedoc EMI / structures de recherches /{sdrs.nom}</p>
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

export default Enseignant
