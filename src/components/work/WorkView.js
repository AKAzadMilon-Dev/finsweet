import React from "react";
import CopyRight from "../copyright/CopyRight";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import Category from "./Category";
import "./workview.css";

const WorkView = () => {
  return (
    <>
      <Navbar></Navbar>
      <section className="workview">
        <div className="container">
          <div className="item">
            <h4>What we created</h4>
            <h2>Our Work Portfolio</h2>
            <p>
              We help teams create great digital products by providing them with
              tools and technology to make the design-to-code process
              universally accessible.
            </p>
            <div className="icons">
              <img src="assets/images/fbicon.png" alt="fbicon" />
              <img src="assets/images/twicon.png" alt="twicon" />
              <img src="assets/images/igicon.png" alt="igicon" />
              <img src="assets/images/ldicon.png" alt="idicon" />
            </div>
          </div>
        </div>
      </section>
      <Category></Category>
      <Footer></Footer>
      <CopyRight></CopyRight>
    </>
  );
};

export default WorkView;
