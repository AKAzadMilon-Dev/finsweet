import React from "react";
import "./follow.css";

const Follow = () => {
  return (
    <section className="follow">
      <div className="container">
        <h2>The process we follow</h2>
        <div className="box">
          <div className="item">
            <img src="assets/images/followicon.png" alt="followicon" />
            <h4>Planning</h4>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
          </div>
          <div className="item">
            <img src="assets/images/followicon.png" alt="followicon" />
            <h4>Conception</h4>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
          </div>
          <div className="item">
            <img src="assets/images/followicon.png" alt="followicon" />
            <h4>Design</h4>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
          </div>
          <div className="item">
            <img src="assets/images/followicon.png" alt="followicon" />
            <h4>Development</h4>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Follow;
