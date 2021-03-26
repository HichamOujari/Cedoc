import React from 'react';
import Home from "./components/home/Home";
import {BrowserRouter as Router , Route,Switch} from "react-router-dom"
import ListDoctorant from "./components/admin/listDoctorants.js"
class App extends React.Component{
    render(){
        return (
            <Router>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route exact path="/login">
                    //Component login by filali
                </Route>
                <Route exact path="/inscrire">
                    //Component login by Ikram
                </Route>
                <Route exact path="/admin/doctorants">
                    <ListDoctorant />
                </Route>
            </Router>
        )
    }
}

export default App;
