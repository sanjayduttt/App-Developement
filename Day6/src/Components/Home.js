import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="home-Containerfull">
      <div className="home-Container">
        <div className={`home-container-body ${isVisible ? "visible" : ""}`}>
          <div className="home-container-body-h1">
            <span>World's Smartest Vacation Planner </span>
          </div>
          <div className="home-container-body-h4">
            <p>Experience The Best trip ever </p>
         
          </div>
          <div className="home-container-body-links">
            <Link
              to="/trippage"
              className="home-container-btn-link"
              style={{ borderRadius: "60px" }}
            >
              Plan our Vacation
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="footer-section">
        <div className="footer-container">
          <div className="footer-row">
            <div className="first-row">
              <div className="first-text">
                <h4>find us</h4>
                <span>bk pudur,kuniyamuthur,coimbatore</span>
              </div>
            </div>
            
            
          </div>
          
        </div>
      </div> */}
    </div>
  );
}
