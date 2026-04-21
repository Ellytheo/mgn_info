import React from 'react';
import './LiquidBackground.css';

const LiquidBackground = () => {
  return (
    <div className="liquid-bg">
      <div className="liquid-bg__orb liquid-bg__orb--1"></div>
      <div className="liquid-bg__orb liquid-bg__orb--2"></div>
      <div className="liquid-bg__orb liquid-bg__orb--3"></div>
      <div className="liquid-bg__orb liquid-bg__orb--4"></div>

      {/* SVG Gooey Filter */}
      <svg xmlns="http://www.w3.org/2000/svg" className="liquid-bg__filter">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="40" result="blur" />
            <feColorMatrix 
              in="blur" 
              mode="matrix" 
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 25 -12" 
              result="goo" 
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default LiquidBackground;
