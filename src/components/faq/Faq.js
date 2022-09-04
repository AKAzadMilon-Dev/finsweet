import React, { useState } from "react";
import Accordian from "../../helpers/Accordian";
import "./faq.css";

const Faq = () => {
  const [accordian, setAccordian] = useState([
    {
      heading: "How much time does it take?",
      detials:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
      state: true,
    },
    {
      heading: "What is your class naming convention?",
      detials:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
      state: false,
    },
    {
      heading: "How do you communicate?",
      detials:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
      state: false,
    },
    {
      heading: "I have a bigger project. Can you handle it?",
      detials:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
      state: false,
    },
    {
      heading: "What is your class naming convention?",
      detials:
        "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>",
      state: false,
    },
  ]);

    const handleOpen = (id) => {
        // accordian[id].state = !accordian[id].state;
      accordian.map((item, index) => {
        if (index != id) {
          item.state = false;
        } else {
          item.state = !item.state;
        }
      });
      setAccordian([...accordian]);
    };

  return (
    <section className="faq">
      <div className="container">
        <div className="box">
          <div className="text">
            <h2>Frequently asked questions</h2>
            <a href="#">Contact us for more info</a>
          </div>
          <div className="accordian">
            {accordian.map((item, index) => (
              <Accordian handleOpen={handleOpen} index={index} open={item.state}  heading={item.heading} details={item.detials} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
