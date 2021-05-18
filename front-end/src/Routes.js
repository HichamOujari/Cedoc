// eslint-disable-next-line no-unused-vars
import React, { Component, useContext, useEffect, useState } from 'react';
import Home from "./components/home/Home";
import {BrowserRouter as Router , Redirect, Route , Switch} from "react-router-dom"
import ListDoctorant from "./components/admin/listDoctorants.js"
import Actualite from "./components/actualite/actualite"
import ListEnseignants from "./components/admin/listEnseignant"
import Inscription from "./components/home/doctorant/Inscription"
import Log from "./components/home/login/Log"
import Navigation from "./components/home/navigation/Navigation"
import ListStructure from "./components/admin/listStructure"
import DashboardAdmin from "./components/admin/dashboardAdmin"
import Chefenseignant from './components/admin/ChefEnseignat/ListDoctorants';
import Enseaignant from './components/admin/Enseignant/DashboardEns';
import AuthApi from './components/home/login/AuthApi';
import ListEnseignats from './components/admin/ChefEnseignat/ListEnseignats';
import ListEnsei from './components/admin/Enseignant/ListsEnseignants';
import ListDoct from './components/admin/Enseignant/ListsDoctorants';
import DashBoardChefEnseignant from './components/admin/ChefEnseignat/DashBoardEnseignant';

function Routes (){  

        const Auth = useContext(AuthApi);

        if(Auth.auth===true)
        {
            return(
                <Switch>
                    <ProtectedLogina path="/login" exact component={Log} auth={Auth.auth}/>
                    <ProtectedAdmin exact path="/admin/" auth={Auth.auth} component={DashboardAdmin} />
                    <ProtectedAdmin exact path="/admin/doctorants" auth={Auth.auth} component={ListDoctorant} />
                    <ProtectedAdmin exact path="/admin/structure-recherche" auth={Auth.auth} component={ListStructure} />
                    <ProtectedAdmin exact path="/admin/enseignants" auth={Auth.auth} component={ListEnseignants} />
                </Switch>
            )
        }

        if(Auth.auc===true)
        {
            return(
                <Switch>
                    <ProtectedLoginc path="/login" exact component={Log} auc={Auth.auc}/>
                    <ProtectedChefEnseignant exact path="/chefenseignant" component={DashBoardChefEnseignant} auc={Auth.auc}/>
                    <ProtectedChefEnseignant exact path="/chefenseignant/doctorants" component={Chefenseignant} auc={Auth.auc}/>
                    <ProtectedChefEnseignant exact path="/chefenseignant/enseignants" component={ListEnseignats} auc={Auth.auc}/>
                </Switch>
            )
        }

        if(Auth.aue===true)
        {
            return(
                <Switch>
                    <ProtectedLogine path="/login" exact component={Log} aue={Auth.aue}/>
                    <ProtectedEnseignant exact path="/enseignant" component={Enseaignant} aue={Auth.aue}/>
                    <ProtectedEnseignant exact path="/enseignant/listenseignants" component={ListEnsei} aue={Auth.aue}/>
                    <ProtectedEnseignant exact path="/enseignant/doctorants" component={ListDoct} aue={Auth.aue}/>
                </Switch>
            )
        }

        return (
                <Switch>
                    <Route path="/" exact >
                        <Navigation />
                        <Home/>
                    </Route>
                    <ProtectedLogina path="/login" exact component={Log} auth={Auth.auth}/>
                    <ProtectedLoginc path="/login" exact component={Log} auc={Auth.auc}/>
                    <ProtectedLogine path="/login" exact component={Log} aue={Auth.aue}/>
                    <Route path="/inscription" exact >
                        <Navigation />
                        <Inscription/>
                    </Route>
                    <ProtectedAdmin exact path="/admin/" auth={Auth.auth} component={DashboardAdmin} />
                    <ProtectedAdmin exact path="/admin/doctorants" auth={Auth.auth} component={ListDoctorant} />
                    <ProtectedAdmin exact path="/admin/structure-recherche" auth={Auth.auth} component={ListStructure} />
                    <ProtectedAdmin exact path="/admin/enseignants" auth={Auth.auth} component={ListEnseignants} />
                    <Route exact path="/actualites">
                        <Actualite />
                    </Route>
                    <ProtectedChefEnseignant exact path="/chefenseignant" component={DashBoardChefEnseignant} auc={Auth.auc}/>
                    <ProtectedChefEnseignant exact path="/chefenseignant/doctorants" component={Chefenseignant} auc={Auth.auc}/>
                    <ProtectedChefEnseignant exact path="/chefenseignant/enseignants" component={ListEnseignats} auc={Auth.auc}/>
                    <ProtectedEnseignant exact path="/enseignant" component={Enseaignant} aue={Auth.aue}/>
                    <ProtectedEnseignant exact path="/enseignant/listenseignants" component={ListEnsei} aue={Auth.aue}/>
                    <ProtectedEnseignant exact path="/enseignant/doctorants" component={ListDoct} aue={Auth.aue}/>
                </Switch>
        )
    }

const ProtectedAdmin = ({auth,component:Component,...rest})=>{
    return(
        <Route
            {...rest}
            render = {()=>auth?(
                <Component/>
            ):
            (
                <Redirect to = "/login"/>
            )
        }
        />
    )
}

const ProtectedChefEnseignant = ({auc,component:Component,...rest})=>{
    return(
        <Route
            {...rest}
            render = {()=>auc?(
                <Component/>
            ):
            (
                <Redirect to = "/login"/>
            )
        }
        />
    )
}

const ProtectedEnseignant = ({aue,component:Component,...rest})=>{
    return(
        <Route
            {...rest}
            render = {()=>aue?(
                <Component/>
            ):
            (
                <Redirect to = "/login"/>
            )
        }
        />
    )
}

const ProtectedLogina = ({auth,component:Component,...rest})=>{
    return(
        <Route
            {...rest}
            render = {()=>!auth?(
                <Component/>
            ):
            (
                <Redirect to = "/admin"/>
            )
        }
        />
    )
}

const ProtectedLoginc = ({auc,component:Component,...rest})=>{
    return(
        <Route
            {...rest}
            render = {()=>!auc?(
                <Component/>
            ):
            (
                <Redirect to = "/chefenseignant"/>
            )
        }
        />
    )
}

const ProtectedLogine = ({aue,component:Component,...rest})=>{
    return(
        <Route
            {...rest}
            render = {()=>!aue?(
                <Component/>
            ):
            (
                <Redirect to = "/enseignant"/>
            )
        }
        />
    )
}

export default Routes;