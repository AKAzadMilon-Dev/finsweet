import React from "react";
import "./startup.css";

const StartUp = () => {
  return (
    <section className="startup">
      <div className="container">
        <div className="box">
          <div className="img">
            <img src="assets/images/inquiry.png" alt="inquiry" />
            <div className="overlay">
              <h2>Building stellar websites for early startups</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua ut
                enim.
              </p>
            </div>
          </div>
          <div className="text">
            <h2>Send inquiry</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore.
            </p>
            <input type="text" placeholder="Your Name"/>
            <input type="email" placeholder="Your Email"/>
            <input type="text" placeholder="Paste your Figma design URL"/>
            <div className="btn">Send an Inquiry</div>
            <a>Get in touch with us <i className="fa-solid fa-right-long"></i></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StartUp;
