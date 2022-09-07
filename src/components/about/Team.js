import React from "react";
import "./team.css";

const Team = () => {
  return (
    <section className="team">
      <h2>Meet our team</h2>
      <div className="container">
        <div className="box">
          <div className="item">
            <img src="assets/images/teamimg.png" alt="teamimg" />
            <div className="img-overlay"></div>
            <h4>John Smith</h4>
            <p>CEO</p>
          </div>
          <div className="item">
            <img src="assets/images/teamimg1.png" alt="teamimg1" />
            <h4>Simon Adams</h4>
            <p>CTO</p>
          </div>
          <div className="item">
            <img src="assets/images/teamimg2.png" alt="teamimg2" />
            <h4>Paul Jones</h4>
            <p>Design Lead</p>
          </div>
          <div className="item">
            <img src="assets/images/teamimg3.png" alt="teamimg3" />
            <h4>Sara Hardin</h4>
            <p>Project Manager</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
