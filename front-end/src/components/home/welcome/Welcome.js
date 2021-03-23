import React from 'react';
import './Welcome.css';

const Welcome = () =>{
    return(
        <div className="welcome-page">
            <div className="welcome-card">
                <p style={{fontSize:32}}><b>WELCOME TO CEDOC EMI</b></p>
                <p style={{fontSize:28}}>CYCLE DOCTORAL</p>
                <p style={{fontFamily:"Comic Sans MS"}}>Rabat</p>
                <button className="read-more-button">Read more</button>
            </div>
        </div>
    )
}

export  default Welcome;