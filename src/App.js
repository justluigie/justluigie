import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useSpring, animated } from 'react-spring';
import image from './pics/me.png'
import './App.css';
import particlesOptions from "./particles.json";








function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])


    



    return (
        <div className="App">
            <Particles options={particlesOptions} init={particlesInit}/>
            <div class ="row">
                <div class="column">
                    <div id="top">Hi.</div>
                    <div id="middle">i'm </div>
                    <div id="bottom">Luigie.
                    <div id="imp"> A Devops Engineer</div></div>
                </div> 
                <div class="column">
                     <div id="myself"><img id="picture" src={image}/></div>
                </div>
            </div>
            <div id="short" class ="intro">
            Under Construction ...
            </div>
          
            
        </div>
        
    );
}

export default App;
