import React from 'react';
import Logo from '../Assets/Amar\'s Pizza_Logo.png'; // Assuming the logo is in Assets

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Amar's Pizza Logo" />
      </div>
      <ul className="navbar-links">
        <li><a href="#willkommen">Willkommen</a></li>
        <li><a href="#pizzakarte">Pizzakarte</a></li>
        <li><a href="#preise">Preise</a></li>
        <li><a href="#buchung">Buchung</a></li>
        <li><a href="#sonstiges">Sonstiges</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;