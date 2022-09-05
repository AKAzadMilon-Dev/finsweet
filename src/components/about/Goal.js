import React from "react";
import "./goal.css"

const Goal = () => {
  return (
    <section className="goal">
        <div className="container">
            <h4>Who we are</h4>
            <div className="box">
                <div className="focus">
                    <h2>Goal focussed</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className="improve">
                    <h2>Continuous improvement</h2>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
            <img src="assets/images/goalimg.png" alt="goalimg"/>
        </div>
    </section>
  );
};

export default Goal;
