import React from "react";
import "./category.css";

const Category = () => {
  return (
    <section className="category">
      <div className="categorylist">
        <ul>
          <li>All</li>
          <li>UI Design</li>
          <li>Webflow Design</li>
          <li>Figma Design</li>
        </ul>
      </div>
      <div className="container">
        <div className="box">
          <div className="item">
            <img src="assets/images/category.png" alt="category" />
            <h3>Template 1</h3>
            <p>
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle.
            </p>
            <a href="#">View Portfolio</a>
          </div>
          <div className="item">
            <img src="assets/images/category1.png" alt="category1" />
            <h3>Template 2</h3>
            <p>
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle.
            </p>
            <a href="#">View Portfolio</a>
          </div>
          <div className="item">
            <img src="assets/images/category2.png" alt="category2" />
            <h3>Template 3</h3>
            <p>
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle.
            </p>
            <a href="#">Read case study</a>
          </div>
          <div className="item">
            <img src="assets/images/category3.png" alt="category3" />
            <h3>Template 4</h3>
            <p>
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle.
            </p>
            <a href="#">Read case study</a>
          </div>
          <div className="item">
            <img src="assets/images/category4.png" alt="category4" />
            <h3>Template 5</h3>
            <p>
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle.
            </p>
            <a href="#">Read case study</a>
          </div>
          <div className="item">
            <img src="assets/images/category5.png" alt="category5" />
            <h3>Template 6</h3>
            <p>
              Apparently we had reached a great height in the atmosphere, for
              the sky was a dead black, and the stars had ceased to twinkle.
            </p>
            <a href="#">Read case study</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
