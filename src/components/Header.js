import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      {/* Container for title and tagline */}
      <div className="header-title">
        <div className="brand-container">
          ORPHEUS
        </div>
        <div className="tagline-container">
          Step into your next escape
        </div>
      </div>
      
      <div className="header-container">
        <Link to="/" className="header-button">Home</Link>
        <Link to="/destinations" className="header-button">Destinations</Link>
        <Link to="/experiences" className="header-button">Experiences</Link>
        <Link to="/testimonials" className="header-button">Testimonials</Link>
      </div>
    </header>  
  );
}

export default Header;
