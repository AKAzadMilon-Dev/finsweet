import React from "react";
import "./mission.css";

const Mission = () => {
  return (
    <section className="mission">
      <div className="container">
        <div className="box">
          <div className="text">
            <h4>Our Mission</h4>
            <h2>Inspire, Innovate, Share</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          <div className="img">
            <img src="assets/images/missionimg.png" alt="missionimg" />
          </div>
        </div>
        <div className="box">
          <div className="img">
            <img src="assets/images/vissionimg.png" alt="vissionimg" />
          </div>
          <div className="text">
            <h4>Our Vission</h4>
            <h2>Laser focus</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
