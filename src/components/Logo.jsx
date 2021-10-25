import React from 'react';
import './Logo.css';

function Logo() {
    return (
        <div className="Logo">
            <p>WeatherCheck</p>
            <div className="Logo__logo-image">
                <div className="Logo__ellipse"></div>
                <div className="Logo__rectangle-2"></div>
                <div className="Logo__rectangle-1"></div>
                <div className="Logo__ellipse-2"></div>
            </div>
        </div>
    );
    }

export default Logo;