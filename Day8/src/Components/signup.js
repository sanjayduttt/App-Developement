import React, { useState } from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleChangesetfirst_name = (e) => {
    setfirst_name(e.target.value);
  };
  const handleChangesetlast_name = (e) => {
    setlast_name(e.target.value);
  };
  const handleChangeMobileNumber = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    navigate("/");
    setfirst_name("");
    setlast_name("");
    setMobileNumber("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="container">
      <div className="signup-form-container">
        <form onSubmit={handleSubmit}>
          <div className="signup-form-container-input">
            <h1>Register here</h1>
            <div className="signup-form-container-input-name">
              <input
                required
                name="first_name"
                type="text"
                placeholder="first_name"
                value={first_name}
                onChange={handleChangesetfirst_name}
              />
              <input
                required
                name="last_name"
                type="text"
                placeholder="last_name"
                value={last_name}
                onChange={handleChangesetlast_name}
              />
            </div>
            <input
              required
              name="mobileNumber"
              type="tel"
              placeholder="Contact Number"
              value={mobileNumber}
              onChange={handleChangeMobileNumber}
            />
            <input
              required
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleChangeEmail}
            />
            <input
              required
              type="password"
              placeholder="Password"
              value={password}
              onChange={handleChangePassword}
            />
            <button className="btn">
              <strong>Submit</strong>
            </button>
            <Link to="/" className="signup-link">
              <strong>Already have an account?Login</strong>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
