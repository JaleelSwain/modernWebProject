import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";

export const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="jmGames logo" />
      </div>
      <ul className="nav-menu">
        <li
          onClick={() => {
            setMenu("home");
            navigate("/");
          }}
        >
          Home {menu === "home" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("consoles");
            navigate("/consoles");
          }}
        >
          Consoles{menu === "consoles" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("games");
            navigate("/games");
          }}
        >
          Games{menu === "games" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button onClick={() => navigate("/login")}>Login</button>
        <div onClick={() => navigate("/cart")} style={{ cursor: "pointer" }}>
          <img src={cart_icon} alt="Cart Icon" />
        </div>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
};
