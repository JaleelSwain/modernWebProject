import React, { useState } from 'react'
import './Navbar.css'

import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'

export const Navbar = () => {

    const [menu,setMenu] = useState("home")

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("home")}}>Home {menu==="home"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu("consoles")}} >Consoles{menu==="consoles"?<hr />:<></>}</li>
            <li onClick={()=>{setMenu("games")}}>Games{menu==="games"?<hr />:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <button>Login</button>
            <img src={cart_icon} alt="" />
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}
