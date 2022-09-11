import React from "react";
import "./clientfirst.css";

const ClientFirst = () => {
  return (
    <section className="client-first">
      <div className="container">
        <div className="box">
          <div className="item">
            <h4>Use Client-first</h4>
            <h2>
              Top agencies and freelancers around the world use Client-first{" "}
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation.
            </p>
          </div>
          <div className="img">
            <img src="assets/images/client.png" alt="client"/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientFirst;
