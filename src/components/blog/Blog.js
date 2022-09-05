import React from "react";
import "./blog.css";

const Blog = () => {
  return (
    <section className="blog">
      <div className="container">
        <h2>Our blog</h2>
        <div className="box">
          <div className="item">
            <img src="assets/images/blogimg.png" alt="blogimg" />
            <div className="time">
              <p>19 Jan 2022</p>
            </div>
            <h4>
              How one Webflow user grew his single person consultancy from
              $0-100K in 14 months
            </h4>
            <p className="text">
              See how pivoting to Webflow changed one person’s sales strategy
              and allowed him to attract
            </p>
            <a>Read more</a>
          </div>
          <div className="item">
            <img src="assets/images/blogimg1.png" alt="blogimg" />
            <div className="time">
              <p>19 Jan 2022</p>
            </div>
            <h4>
              How one Webflow user grew his single person consultancy from
              $0-100K in 14 months
            </h4>
            <p className="text">
              See how pivoting to Webflow changed one person’s sales strategy
              and allowed him to attract
            </p>
            <a>Read more</a>
          </div>
          <div className="item">
            <img src="assets/images/blogimg2.png" alt="blogimg" />
            <div className="time">
              <p>19 Jan 2022</p>
            </div>
            <h4>
              How one Webflow user grew his single person consultancy from
              $0-100K in 14 months
            </h4>
            <p className="text">
              See how pivoting to Webflow changed one person’s sales strategy
              and allowed him to attract
            </p>
            <a>Read more</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
