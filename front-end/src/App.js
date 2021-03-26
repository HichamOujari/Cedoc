import React from 'react';
import Home from "./components/home/Home";
import {BrowserRouter as Router , Route} from "react-router-dom"
import ListDoctorant from "./components/admin/listDoctorants.js"
class App extends React.Component{
    render(){
        return (
            <Router>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route exact path="/admin/doctorants">
                    <ListDoctorant />
                </Route>
            </Router>
        )
    }
}

export default App;
