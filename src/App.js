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
                    <div id = "horizon">
                    <div id="top">Hi.</div>
                    <div id="middle">i'm </div>
                    <div id="bottom">Luigie.
                    <div id="imp"> A Devops Engineer</div></div>
                    </div>
                </div> 
                <div class="column">
                     <div id="myself"><img id="picture" src={image}/></div>
                </div>
            </div>
            <div id="short" class ="intro">
            I'm a Devops Engineer located in Philippines. I have a passion for IT as a whole but mainly focused on learning cloud based systems.<br></br>
            <br></br>
            A dynamic and performance driven graduate of Electronics Engineering, seeking new opportunities to learn. Always up for an insightful conversation over coffee, a fan of anime/video games and always seeking new adventures and places to travel to.<br></br>
            <br></br>
            Interested in front-end and back-end technologies. Aiming to eventually have a significant mastery of it.
            </div>
          
            
        </div>
        
    );
}

export default App;
