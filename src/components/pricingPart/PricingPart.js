import React from "react";
import { Link } from "react-router-dom";
import "./pricingpart.css";

const PricingPart = () => {
  return (
    <section className="pricing">
      <div className="title">
        <h2>Our Pricing Plans</h2>
        <p>
          When you’re ready to go beyond prototyping in Figma, Webflow is ready
          to help you bring your designs to life — without coding them.
        </p>
      </div>
      <div className="container">
        <div className="box">
          <div className="item">
            <h2>
              $299 <span>Per Design</span>
            </h2>
            <h4>Landing Page </h4>
            <p>When you’re ready to go beyond prototyping in Figma, </p>
            <ul>
              <li>
                {" "}
                <img src="assets/images/pointer.png" alt="pointer" /> All
                limited links
              </li>
              <li>
                {" "}
                <img src="assets/images/pointer.png" alt="pointer" /> Own
                analytics platform
              </li>
              <li>
                {" "}
                <img src="assets/images/pointer.png" alt="pointer" /> Chat
                support
              </li>
              <li>
                {" "}
                <img src="assets/images/pointer.png" alt="pointer" /> Optimize
                hashtags
              </li>
              <li>
                {" "}
                <img src="assets/images/pointer.png" alt="pointer" /> Unlimited
                users
              </li>
              <li></li>
            </ul>
            <Link to="/home">
              <div className="btn"><a>Get started</a></div>
            </Link>
          </div>
          <div className="item">
            <h2>
              $299 <span>Per Design</span>
            </h2>
            <h4>Landing Page </h4>
            <p>When you’re ready to go beyond prototyping in Figma, </p>
            <ul>
              <li>
                {" "}
                <img src="assets/images/pointer.png" alt="pointer" /> All
                limited links
              </li>
              <li>
                {" "}
                <img src="assets/images/pointer.png" alt="pointer" /> Own
                analytics platform
              </li>
              <li>
                {" "}
                <img src="assets/images/pointer.png" alt="pointer" /> Chat
                support
              </li>
              <li>
                {" "}
                <img src="assets/images/pointer.png" alt="pointer" /> Optimize
                hashtags
              </li>
              <li>
                {" "}
                <img src="assets/images/pointer.png" alt="pointer" /> Unlimited
                users
              </li>
              <li></li>
            </ul>
            <Link to="/home">
              <div className="btn"><a>Get started</a></div>
            </Link>
          </div>
          <div className="item">
            <h2>
              $299 <span>Per Design</span>
            </h2>
            <h4>Landing Page </h4>
            <p>When you’re ready to go beyond prototyping in Figma, </p>
            <ul>
              <li>
                {" "}
                <img src="assets/images/pointer.png" alt="pointer" /> All
                limited links
              </li>
              <li>
                {" "}
                <img src="assets/images/pointer.png" alt="pointer" /> Own
                analytics platform
              </li>
              <li>
                {" "}
                <img src="assets/images/pointer.png" alt="pointer" /> Chat
                support
              </li>
              <li>
                {" "}
                <img src="assets/images/pointer.png" alt="pointer" /> Optimize
                hashtags
              </li>
              <li>
                {" "}
                <img src="assets/images/pointer.png" alt="pointer" /> Unlimited
                users
              </li>
              <li></li>
            </ul>
            <Link to="/home">
              <div className="btn"><a>Get started</a></div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingPart;
