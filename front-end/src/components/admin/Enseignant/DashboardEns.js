import React, { useState } from 'react'
import Nav from '../nav'
import SideBar from './sidebar'
import "../ChefEnseignat/DashEnseignant.css";
import Cookies from 'js-cookie';
import Axios from 'axios';

function DashBoardChefEnseignant() {

    const idc = 0;
    const [strr,setStrr] = useState(0);
    const [sdrr,setSdrr] = useState([]);

    Axios.post("http://localhost:3001/enseignant",{
        idc : Cookies.get("ide")
    }).then((response) => {
        setStrr(response.data[0].structurederecherche);
    });

    Axios.post("http://localhost:3001/enseignantsdr",{strr : strr}).then((response) => {
        setSdrr(response.data)
    });

    return (
        <div className="DashEnseignant">
            <div className="mainn">
                <Nav/>
            </div>
            <div className="mains">
                <SideBar/> 
            </div>
            <div className="container">
                <h4>Dashboard</h4>
                <br/>
                {sdrr.map(sdrs=>(
                    <p key={sdrs.id}>Cedoc EMI / {sdrs.nom} / Dashboard</p>
                ))}
            </div>
        </div>
    )
}

export default DashBoardChefEnseignant
