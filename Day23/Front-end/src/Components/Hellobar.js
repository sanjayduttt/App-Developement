// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useSelector } from "react-redux";
import { selectUser } from "../Components/Redux/userSlice";

function Hellobar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const user = useSelector(selectUser);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className={`navbar ${menuOpen ? "menu-open" : ""}`}>
      {/* Hamburger Menu Icon */}
      <div className={`hamburger-icon`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Menu Components */}
      <div className="menu">
        <ul>
          <li>
            <b>
              Welcome
              <br /> {user.email}
            </b>
          </li>
          <li>
            <Link to="/Aboutpage">About us</Link>
          </li>
          <li>
            <Link to="/contactpage">Contact Us</Link>
          </li>
          <li>
            <Link to="/feedbackpage">Feedback</Link>
          </li>
          <li>
            <Link to="/menu4">Logout</Link>
          </li>
        </ul>
      </div>

      {/* Right-side Navigation */}
      <div className="right-navigation">
        <div className="logo">{/* Your logo here */}</div>
        <ul className="nav-links">
          <li className="trip-planner">
            <Link to="/trippage">Trip Planner</Link>
          </li>
          <li className="thing-to-do">
            <Link to="/thingsToDo">Things to Do</Link>
          </li>
          <li className="About">
            <Link to="/Aboutpage">About</Link>
          </li>
          <li className="Help">
            <Link to="/Home">Home</Link>
          </li>
        </ul>
        <div className="auth-buttons">
          <button className="Sign-up-button">Hey, {user.username}</button>
          {/* <button className="Log-in-button">Log In</button> */}
        </div>
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15669.50872611209!2d76.92972415!3d10.934854499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85bd681e2f533%3A0x84cef915d2722abd!2sDHEEKSHA%20AUTO!5e0!3m2!1sen!2sin!4v1695281223394!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
      </div>
    </div>
  );
}

export default Hellobar;
