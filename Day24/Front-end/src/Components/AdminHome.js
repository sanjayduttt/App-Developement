import React, { useEffect, useState } from "react";
import Adminbar from "./Pages/Adminbar";
import "./AdminHome.css";

export default function AdminHome() {
  // const Navigate=useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
    <Adminbar/>
    <div className="home-Containerfull">
      <div className="home-Container2">
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/no-search-found-2511608-2133696.png" alt="backend"></img>
      </div>
    </div>
  </>
  );
}
