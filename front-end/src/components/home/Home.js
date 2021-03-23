import React from 'react';
import './Home.css';
import Navigation from "./navigation/Navigation";
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
                <Navigation />
                <Welcome/>
            </div>

        )
    }
}

export default  Home;
