// frontend/src/Components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './Navbar.css';

import logo from '../Assets/logo.png'; // Adjust path based on your Assets folder location relative to Navbar
import cart_icon from '../Assets/cart_icon.png'; // Adjust path it was correct intially with the ../ and not ../../

export const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const navigate = useNavigate(); // Initialize navigate hook

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt="GameStop Logo" /> {/* Add alt text for accessibility */}
      </div>
      <ul className="nav-menu">
        <li onClick={() => { setMenu("home"); navigate('/'); }}>Home {menu === "home" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("consoles"); navigate('/consoles'); }}>Consoles{menu === "consoles" ? <hr /> : <></>}</li>
        <li onClick={() => { setMenu("games"); navigate('/games'); }}>Games{menu === "games" ? <hr /> : <></>}</li>
      </ul>
      <div className="nav-login-cart">
        {/* Add an onClick handler to the button to navigate to the /login path */}
        <button onClick={() => navigate('/login')}>Login</button>
        <img src={cart_icon} alt="Cart Icon" /> {/* Add alt text */}
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};
