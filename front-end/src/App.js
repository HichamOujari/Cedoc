import React from 'react';
import Home from "./components/home/Home";
import {BrowserRouter as Router , Route} from "react-router-dom"
import ListDoctorant from "./components/admin/listDoctorants.js"
import Actualite from "./components/actualite/actualite"
import ListEnseignants from "./components/admin/listEnseignant"
import Inscription from "./components/home/doctorant/Inscription"
import Login from "./components/home/login/Login"
import Navigation from "./components/home/navigation/Navigation"
import ListStructure from "./components/admin/listStructure"
import DashboardAdmin from "./components/admin/dashboardAdmin"
import Chefenseignant from './components/admin/ChefEnseignat/chefenseignant';
import Enseaignant from './components/admin/ChefEnseignat/enseignant';

class App extends React.Component{
    render(){
        return (
            <Router>
                <Route path="/" exact>
                    <Navigation />
                    <Home/>
                </Route>
                <Route path="/login" exact>
                    <Navigation />
                    <Login/>
                </Route>
                <Route path="/inscription" exact>
                    <Navigation />
                    <Inscription/>
                </Route>
                <Route exact path="/admin/">
                    <DashboardAdmin />
                </Route>
                <Route exact path="/admin/doctorants">
                    <ListDoctorant />
                </Route>
                <Route exact path="/admin/structure-recherche">
                    <ListStructure />
                </Route>
                <Route exact path="/admin/enseignants">
                    <ListEnseignants />
                </Route>
                <Route exact path="/actualites">
                    <Actualite />
                </Route>
                <Route exact path="/chefenseignant/:id" component={Chefenseignant}/>
                <Route exact path="/enseignant/:id" component={Enseaignant}/>

            </Router>
        )
    }
}

export default App;