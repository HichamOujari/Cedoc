import React from 'react';
import './Welcome.css';
import Particles from "react-tsparticles";

class Welcome extends React.Component{
    constructor() {
        super();
        this.particlesInit = this.particlesInit.bind(this);
        this.particlesLoaded = this.particlesLoaded.bind(this);
    }

    particlesInit(main) {
        console.log("main :" ,main);

        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    }

    particlesLoaded(container) {
        console.log("container :", container);
    }

    render() {
        return(
            <div className="welcome-page">

                <div className="welcome-card">
                    <Particles
                        className='particles'
                        id="tsparticles"
                        init={this.particlesInit}
                        loaded={this.particlesLoaded}

                        options={{
                            background: {
                                color: {
                                    value: "gray",
                                },
                            },
                            fpsLimit: 60,
                            interactivity: {
                                detectsOn: "window",
                                events: {
                                    onClick: {
                                        enable: true,
                                        mode: "push",
                                    },
                                    onHover: {
                                        enable: true,
                                        mode: "repulse",
                                    },
                                    resize: true,
                                },
                                modes: {
                                    bubble: {
                                        distance: 400,
                                        duration: 2,
                                        opacity: 0.8,
                                        size: 40,
                                    },
                                    push: {
                                        quantity: 4,
                                    },
                                    repulse: {
                                        distance: 200,
                                        duration: 0.4,
                                    },
                                },
                            },
                            particles: {
                                color: {
                                    value: "#ffffff",
                                },
                                links: {
                                    color: "#ffffff",
                                    distance: 150,
                                    enable: true,
                                    opacity: 1,
                                    width: 1,
                                },
                                collisions: {
                                    enable: true,
                                },
                                move: {
                                    direction: "none",
                                    enable: true,
                                    outMode: "bounce",
                                    random: false,
                                    speed: 6,
                                    straight: false,
                                },
                                number: {
                                    density: {
                                        enable: true,
                                        value_area: 800,
                                    },
                                    value: 150,
                                },
                                opacity: {
                                    value: 0.9,
                                },
                                shape: {
                                    type: "circle",
                                },
                                size: {
                                    random: true,
                                    value: 5,
                                },
                            },
                            detectRetina: true,
                        }}/>
                    <p style={{fontSize:34}}><b>WELCOME TO CEDOC EMI</b></p>
                    <p style={{fontSize:28}}>CYCLE DOCTORAL</p>
                    <p style={{fontFamily:"Comic Sans MS",fontSize:18}}>Rabat</p>
                    <button className="read-more-button">Read more</button>
                </div>
            </div>
        )
    }


}

export  default Welcome;