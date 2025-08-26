import React from "react";
import "./Navbar.css";
import menuIcon from "../assets/hamburger.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo / Left */}
        <div className="logo">LOREM IPSUM</div>

        {/* Links */}
        <ul className="nav-links">
          <li><a href="#">LOREM IPSUM</a></li>
          <li><a href="#">ASSET LOREM IPSUM</a></li>
          <li><a href="#">LOREM IPSUM</a></li>
          <li><a href="#">LOREM IPSUM</a></li>
        </ul>

        {/* Hamburger */}
        <div className="menu-icon">
          <img src={menuIcon} alt="menu" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
