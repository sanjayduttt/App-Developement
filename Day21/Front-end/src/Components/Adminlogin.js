import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { useStates } from "./States";
import { useDispatch } from 'react-redux';
import { login } from '../Components/Redux/userSlice';

export default function AdminLogin() {
  const dispatch = useDispatch();

  const { email,setEmail, password,setPassword, username, setUsername}=useStates();
  var navigate = useNavigate();

  const handleChangeUserMail = (e) => {
    const value = e.target.value;
    setEmail(value);
  };
  
  const handleChangeUsername = (e) => {
    const value = e.target.value;
    setUsername(value);
  };
  
  
  const handleChangePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email,username)
    dispatch(login({
      email :email,
      username :username
    }))
    navigate("/AdminHome")
  };

  return (
    <div className="container1">
      <h1>SkyTours Trip</h1>
      <div className="column-2">
        <h1>ADMIN</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-input-group">
            <div className="input-group1">
              <div className="form-input1">
                <input
                  required
                  type="Username"
                  placeholder="Enter your Username"
                  value={username}
                  onChange={handleChangeUsername}
                  autoComplete="on"
                />
              </div>
            </div>
            <div className="input-group1">
              <div className="form-input1">
                <input
                  required
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={handleChangeUserMail}
                  autoComplete="on"
                />
              </div>
            </div>
            <div className="input-group1">
              <div className="form-input1">
                <input
                  required
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={handleChangePassword}
                />
              </div>
              <br />
            </div>
            <div className="input-submit">
              {/* <Link to="/homepage"> */}
              <button className="form-input-btn2" type="submit">
                <strong>Login</strong>
              </button>
              {/* </Link> */}
            </div>
          </div>  
        </form>
      </div>
    </div>
  );
}
