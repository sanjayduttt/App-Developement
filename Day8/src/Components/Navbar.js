// Navbar.js
import React,{useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
  

function Navbar() {
  var navigate=useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className={`navbar ${menuOpen ? "menu-open" : ""}`}>
    {/* Hamburger Menu Icon */}
    <div className={`hamburger-icon`} onClick={toggleMenu}>
      {/* <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div> */}
    </div>

    {/* Menu Components */}
    {/* <div className="menu">
      <ul>
        <li>
          <Link to="/Aboutpage">About </Link>
        </li>
        <li>
          <Link to="/menu2">Menu 2</Link>
        </li>
        <li>
          <Link to="/menu3">Menu 3</Link>
        </li>
        <li>
          <Link to="/menu4">Menu 4</Link>
        </li>
      </ul>
    </div> */}

    {/* Right-side Navigation */}
    <div className="right-navigation">
      <div className="logo">
        {/* Your logo here */}
      </div>
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
          <Link to="/Help">Help</Link>
        </li>
      </ul>
      <div className="auth-buttons">
        <button className="Sign-up-button" onClick={()=>navigate("/signup")}>Sign Up</button>
        <button className="Log-in-button" onClick={()=>navigate("/login")}>Log In</button>
      </div>
    </div>
  </div>
  );
}

export default Navbar;