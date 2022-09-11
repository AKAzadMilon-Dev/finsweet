import React from "react";
import CopyRight from "../components/copyright/CopyRight";
import Faq from "../components/faq/Faq";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import PricingPart from "../components/pricingPart/PricingPart";

const Pricing = () => {
  return <>
    <Navbar></Navbar>
    <PricingPart></PricingPart>
    <Faq></Faq>
    <Footer></Footer>
    <CopyRight></CopyRight>
  </>;
};

export default Pricing;
