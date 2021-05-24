import React, { Component } from 'react';
import "./style.css"
import BarsAdmin from "../barsAdmin"
import PathingPage from "../../shared/pathingPage"
import ProfilShared from "../../shared/profilShared"

class ProfilAdmin extends Component {
    render() {
        return (
            <div>
                <BarsAdmin/>
                <div className="MainProfilAdmin">
                    <PathingPage title="Profil Admin" paths={["Cedoc Emi","Admin","Profil"]}/>
                    <div className="Content">
                        <ProfilShared />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfilAdmin;