import React from 'react';
import Navigation from "../home/navigation/Navigation";
import MainActualite from "./mainActualite"
import "./actualite.css"

export default class Actualite extends  React.Component{
    render(){
        return(
            <div className="ActualitePage">
                <Navigation />
                <MainActualite />
            </div>
        )
    }
}