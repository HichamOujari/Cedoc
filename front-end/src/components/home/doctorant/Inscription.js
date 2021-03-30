import React from 'react'
import "./Inscription.css"
import Title from "../../outils/title"

function Inscription() {

    return (<>
        <div className="contain">
            
            <div className="TopTitle">
                <Title title="Inscription Doctorant" />
            </div>
            <div className="insc">
                <p className="lbl1">
                    <label>Numer de dossier</label><br/>
                    <input className="inp3" type="text" />
                </p>
                <p className="sec">
                    <div>
                        <p className="lbl2">
                            <label>Nom</label><br/>
                            <input className="inp2" id="inp2" type="text"/><span style={{opacity : 0}}>hh</span>
                        </p>
                    </div>
                    <div>
                        <p className="lbl2">
                            <label>Prénom</label><br/>
                            <input className="inp2" type="text"/>
                        </p>
                    </div>
                </p>
                <p className="sec">
                    <div>
                        <p className="lbl2">
                            <label>CNE</label><br/>
                            <input className="inp2" id="inp2" type="text"/><span style={{opacity : 0}}>hh</span>
                        </p>
                    </div>
                    <div>
                        <p className="lbl2">
                            <label>CNI</label><br/>
                            <input className="inp2" type="text"/>
                        </p>
                    </div>
                </p>
                <p className="lbl1">
                    <label>Date de Naissance</label><br/>
                    <input className="inp3" type="date"/>
                </p>
                <p className="lbl1">
                    <label>Reçu de paiment</label><br/>
                    <div className="upl">
                        <div onClick={()=>{
                        document.getElementById("ExcelInput").click()
                        }} className="upload">
                        <i class="fas fa-upload fa-font"></i><br/>
                        <input type="file" hidden id="ExcelInput"/>
                        <p>Drop files here to upload</p>
                        </div>
                    </div>
                </p>
                <p>
                    <button className="valider-btn">Valider</button>
                </p>
            </div>
        </div>
    </>
    )
}

export default Inscription;
