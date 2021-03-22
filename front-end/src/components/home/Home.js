import React from 'react';
import './Home.css';
import Navigation from "./navigation/Navigation";

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
            </div>

        )
    }
}

export default  Home;
