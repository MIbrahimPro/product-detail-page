import './App.css';
import { Routes, Route } from "react-router-dom";
import React, { useState, useRef, useEffect } from 'react';

import Home from './pages/main';
import After from './pages/after';
import Before from './pages/before';


function App() {
    const [mouseX, setMouseX] = useState(window.innerWidth / 2);
    const [mouseY, setMouseY] = useState(window.innerHeight / 2);

    const appContainerRef = useRef(null);

    useEffect(() => {
        setMouseX(window.innerWidth / 2);
        setMouseY(window.innerHeight / 2);

        const handleMouseMove = (e) => {
            setMouseX(e.clientX);
            setMouseY(e.clientY);
        };

        document.addEventListener('mousemove', handleMouseMove);

        if (appContainerRef.current) {
            appContainerRef.current.style.cursor = 'none';
        }

        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            if (appContainerRef.current) {
                appContainerRef.current.style.cursor = 'auto';
            }
        };
    }, []);
    return (
        <div className="App">
            <div
                className="relative  custom-cursor"
                style={{
                    left: `${mouseX}px`,
                    top: `${mouseY}px`,
                }}
            >
                <div className="cursor-dot"></div>
            </div>
            <Routes>

                <Route path="/after" element={<After />} />
                <Route path="/before" element={<Before />} />
                <Route path="*" element={<Home />} />

            </Routes>
            <div className='h-screen w-full bg-gray-300' />
        </div>
    );
}

export default App;
