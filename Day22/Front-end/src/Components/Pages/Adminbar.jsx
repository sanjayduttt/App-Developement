// Navbar.js
import React,{useState} from "react";
import '../Navbar.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../../Components/Redux/userSlice'
import { useStates } from "../States";

function Adminbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const user=useSelector(selectUser)
  const {navigate}=useStates();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className={`navbar2 ${ "menu2-open"}`}>
    {/* Hamburger Menu Icon */}
    <div className="" onClick={toggleMenu}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>

    {/* Menu Components */}
    <div className="menu2">
      <ul>
        <li>
          <b>Welcome<br/>Admin - {user.username}</b>
        </li>
        <li>
          <b>View Users</b>
        </li>
        <li>
          <b>Add Location</b>
        </li>
        <li>
          <b onClick={()=>navigate("/Addspot")}>Add Tourist Spot</b>
        </li>
        <li>
          <b onClick={()=>navigate("/kkkk")}>Add Hotel</b>
        </li>
        <li style={{display:'flex',alignItems:'center',justifyContent:'center',gap:'10px'}}>
       <span> <i class="fa-solid fa-right-from-bracket"></i></span>
          <b>Admin Logout</b>
        </li>
      </ul>
    </div>

    {/* Right-side Navigation */}
    <div className="right-navigation">
      <div className="logo">
        {/* Your logo here */}
      </div>
      <ul className="nav-links">
        <li className="trip-planner">
          <p></p>
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

export default Adminbar;
