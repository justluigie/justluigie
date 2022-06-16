import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import './App.css';
import particlesOptions from "./particles.json";
import Button from 'react-bootstrap/Button'

function App() {
    const particlesInit = useCallback(main => {
        loadFull(main);
    }, [])

    return (
        <div className="App">
            <Particles options={particlesOptions} init={particlesInit}/>
            <header className="App-header">
                Under Construction..
               
            </header>
        </div>
    );
}

export default App;
