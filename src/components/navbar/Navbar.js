import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="container">
        <div className="box">
          <div className="logo">
            <img src="assets/images/logo.png" alt="logo" />
          </div>
          <div className="nav-item">
            <ul>
              <li>Home</li>
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/features">Features</Link>
              </li>
              <li>Prices</li>
              <li>FAQ</li>
              <li>Blogs</li>
            </ul>
            <Link to="/contact">
              <div className="btn">Contact us</div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
