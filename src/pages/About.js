import React from 'react';
import Navbar from '../components/navbar/Navbar';
import AboutUs from '../components/about/AboutUs';
import Goal from '../components/about/Goal';
import Follow from '../components/about/Follow';
import Mission from '../components/about/Mission';
import Working from '../components/about/Working';
import Footer from '../components/footer/Footer';
import CopyRight from '../components/copyright/CopyRight';
import Team from '../components/about/Team';

const About = () => {
  return (
    <>
      <Navbar></Navbar>
      <AboutUs></AboutUs>
      <Goal></Goal>
      <Follow></Follow>
      <Mission></Mission>
      <Working></Working>
      <Team></Team>
      <Footer></Footer>
      <CopyRight></CopyRight>
    </>
  )
}

export default About