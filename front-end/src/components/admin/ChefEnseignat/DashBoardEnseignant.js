import React from 'react'
import Nav from '../nav'
import SideBar from './sideBarEnseignant'
import "./DashEnseignant.css";

function DashBoardChefEnseignant() {
    return (
        <div className="DashEnseignant">
            <div className="mainn">
                <Nav/>
            </div>
            <div className="mains">
                <SideBar/>
            </div>
        </div>
    )
}

export default DashBoardChefEnseignant
