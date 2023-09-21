// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
// import logoimg from './Images/logoimg.png';
function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo"></div>
      <ul className="nav-links">
        <li className="trip-planner">Trip Planner</li>
        <li className="thing-to-do">
          <Link to="/thingsToDo">Things to Do</Link>
        </li>
        <li className="About">
            <Link to="/Aboutpage">About</Link>
            </li>
      </ul>
      <div className="auth-buttons">
        <button className="Sign-up-button">Sign Up</button>
        <button className="Log-in-button">Log In</button>
      </div>
    </nav>
  );
}

export default Navbar;