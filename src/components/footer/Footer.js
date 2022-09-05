import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="container">
        <div className="box">
          <div className="contact">
            <img src="assets/images/logo.png" alt="logo" />
            <p>
              We are always open to discuss your project and improve your online
              presence.
            </p>
            <div className="details">
              <div className="email">
                <h4>Email me at</h4>
                <p>contact@website.com</p>
              </div>
              <div className="call">
                <h4>Call us</h4>
                <p>0927 6277 28525</p>
              </div>
            </div>
          </div>
          <div className="text">
            <h2>Lets Talk!</h2>
            <p>
              We are always open to discuss your project, improve your online
              presence and help with your UX/UI design challenges.
            </p>
            <div className="icons">
              <img src="assets/images/facebook.png" alt="facebook" />
              <img src="assets/images/twiter.png" alt="facebook" />
              <img src="assets/images/instagram.png" alt="facebook" />
              <img src="assets/images/linkdin.png" alt="facebook" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
