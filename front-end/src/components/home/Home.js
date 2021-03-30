import React from 'react';
import './Home.css';
import Navigation from "./navigation/Navigation";
import Welcome from "./welcome/Welcome";
import {BrowserRouter as Router , Route} from "react-router-dom"
import Login from './login/Login';
import Inscription from './doctorant/Inscription';

class Home extends  React.Component{
    constructor() {
        super();
        this.state={

        }
    }

    render(){
        return(
            <div className="home">
                
                <Router>
                <Navigation />
                    <Route exact path="/"><Welcome/></Route>
                    <Route exact path="/cedoc/login" component={Login}/>
                    <Route exact path="/doctorant/inscription" component={Inscription}/>
                </Router>
            </div>

        )
    }
}

export default  Home;
