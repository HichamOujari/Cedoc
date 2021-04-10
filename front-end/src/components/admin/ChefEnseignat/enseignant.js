import React from 'react'
import Nav from '../nav'
import SideBar from '../sideBar'
import "./chefenseignant.css"

function enseignant() {
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
                <p>Cedoc EMI / structures de recherches /Réseaux informatique</p>
                <div className="doct">
                    <p>Doctotants du Réseaux informatique</p>
                </div>
                <div className="tab">
                    <table>
                        <thead>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Email</th>
                            <th>Téléphone</th>
                            <th>Spécialité</th>
                            <th>Action</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>dfjn</td>
                                <td>dfjn</td>
                                <td>dfjn</td>
                                <td>dfjn</td>
                                <td>dfjn</td>
                                <td>Acc</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default enseignant
