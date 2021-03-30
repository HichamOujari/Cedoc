import React, { Component } from 'react';
import "./outils.css"

export default class Title extends Component {
  render() {
    return (
        <div className="titleComp">
            <p className="text">{this.props.title}</p>
            <div className="border">
                <div className="C1"></div>
                <div className="C2"></div>
                <div className="C3"></div>
            </div>
        </div>
    );
  }
}
