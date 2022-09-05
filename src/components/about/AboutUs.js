import React from "react";
import "./aboutus.css";

const AboutUs = () => {
  return (
    <section className="aboutus">
      <div className="container">
        <div className="box">
          <div className="text">
            <h4>About us</h4>
            <h2>Our designs solve problems</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
          <div className="img">
            <img src="assets/images/aboutimg.png" alt="aboutimg"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
