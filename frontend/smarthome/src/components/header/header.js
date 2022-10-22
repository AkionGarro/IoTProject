import React from "react";
import "./header.css";
import logo from "../../images/logo.png";

function Header() {
  return (
    <nav className="navigation d-flex justify-content-evenly">
      <div className="d-flex align-items-center ">
        <div className="routes d-flex align-items-center">
          <img src={logo} alt="homeImage"></img>
          <ul className="nav justify-content-between">
            <li>Home</li>
            <li>Consumption</li>
            <li>Advices</li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
      <div className="buttonGroup">
        <button className="btn btn-light" id="loginBtn">
          Log In
        </button>
        <button className="btn btn-light" id="signBtn">
          Sign Up
        </button>
      </div>
    </nav>
  );
}

export default Header;
