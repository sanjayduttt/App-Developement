import React, { useEffect, useState } from "react";
import { Link, } from "react-router-dom";
import "./home.css";

export default function Home() {
  // const Navigate=useNavigate();
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
            <span>World's Smartest Vacation Planner</span>
          </div>
          <div className="home-container-body-h4">
            <p>Experience The Best trip ever</p>
          </div>
          <div className="home-container-body-links">
            <Link
              to="/trippage"
              className="home-container-btn-link"
              style={{ borderRadius: "60px" }}
            >
              Plan your Vacation
            </Link>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="footer">
        {/* Footer content goes here */}
        <div>
          <p className="Copyright">&copy; 2023 SkyTours. All rights reserved.</p>
          <Link to="/policypage" className="target">Privacy Policy</Link>
          <Link to="/faq" className="target1">F.A.Q</Link>
          <Link to="/termspage" className="target2">Term & Conditions</Link>
        </div>
      </div>
    </div>
  );
}
