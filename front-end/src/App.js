import React from 'react';
import Home from "./components/home/Home";
import {BrowserRouter as Router , Route} from "react-router-dom"
import ListDoctorant from "./components/admin/listDoctorants.js"
import Actualite from "./components/actualite/actualite"
import Login from "./components/hicham/login"

class App extends React.Component{
    render(){
        return (
            <Router>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/login" exact>
                    <Login/>
                </Route>
                <Route exact path="/admin/doctorants">
                    <ListDoctorant />
                </Route>
                <Route exact path="/actualites">
                    <Actualite />
                </Route>
            </Router>
        )
    }
}

export default App;
