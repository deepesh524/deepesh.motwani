import React,{ useCallback, useEffect } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
// import helper from './helper'

export default function ParticleComponent(){

    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    useEffect(() => {
        document.getElementById('tsparticles').style.height = '100vh'
        
        return () => {
            document.getElementById('tsparticles').style.height = '100vh'
        }
    }, [])

    return <div className="foregroundImage" style={{zIndex:0}}> 
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
                
                fullScreen: {
                    enable: false,
                    zIndex: 0
                    },
        particles: {
            number: {
                value: 70,
                limit: 100,
                density: {
                    enable: true,
                    value_area: 1000
                }
            },
            color: {
                value: "rgb(250,250,250)"
            },
            shape: {
                type: 'line',
                stroke: {
                    width: 200,
                    color: "rgb(50,50,50)"
                    },
                polygon: {
                    nb_sides: 5
                    },
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: true,
                    speed: 5,
                    opacity_min: 0.2,
                    sync: true
                },
            },
            size: {
                value: 10,
                random: true,
                anim: {
                    enable: true,
                    speed: 1,
                    size_min: 10,
                    sync: true
                },
            },
            line_linked: {
                enable: false,
                distance: 80,
                color: "#FFA500",
                opacity: 1,
                width: 1
            },
            move: {
                enable: true,
                speed: 0.8,
                direction: "none",
                random: false,
                straight: true,
                out_mode: "out",
                bounce: false,
                vibrate:false,
                attract: {
                    enable: false,
                    rotateX: 0,
                    rotateY: 90
                },
                outModes: {
                    "default": "bounce",
                    "bottom": "bounce",
                    "left": "bounce",
                    "right": "bounce",
                    "top": "bounce"
                    },
            }
        },
        interactivity: {
            detect_on: "window",
            events: {
                onHover: {
                    enable: true,
                    mode: "bubble",
                    parallax: {
                        enable: true,
                        force: 200,
                        smooth: 10
                    }
                },
                onClick: {
                    enable: true,
                    mode: "push"
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 400,
                    lineLinked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 100,
                    size: 10,
                    duration: 2,
                    opacity: 0.5,
                    speed: 2,
                    color:'rgb(255,0,221)'
                },
                repulse: {
                    distance: 200
                },
                push: {
                    particles_nb: 1
                },
                remove: {
                    particles_nb: 2
                }
            }
        },
        backgroundMask: {
            enable: false,
            cover: {
                color: {
                value: {
                    r: 255,
                    g: 255,
                    b: 255
                }
                }
            }
        },
        retina_detect: false,
        fps_limit: 120,
            }}
        />
    </div>
};
  