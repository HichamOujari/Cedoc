import React from 'react';
import './Home.css';
import Welcome from "./welcome/Welcome";

class Home extends  React.Component{
    constructor() {
        super();
        this.state={

        }
    }

    render(){
        return(
            <div className="home">
                <Welcome/>
            </div>

        )
    }
}

export default  Home;
