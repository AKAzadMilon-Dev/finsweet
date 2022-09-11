import React from "react";
import Banner from "../components/banner/Banner";
import CopyRight from "../components/copyright/CopyRight";
import Faq from "../components/faq/Faq";
import ClientFirst from "../components/feature/ClientFirst";
import Delivery from "../components/feature/Delivery";
import FeatureWorking from "../components/feature/FeatureWorking";
import Revision from "../components/feature/Revision";
import Support from "../components/feature/Support";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const Feature = () => {
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <FeatureWorking></FeatureWorking>
      <ClientFirst></ClientFirst>
      <Revision></Revision>
      <Support></Support>
      <Delivery></Delivery>
      <Faq></Faq>
      <Footer></Footer>
      <CopyRight></CopyRight>
    </>
  );
};

export default Feature;
