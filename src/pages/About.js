import React from 'react';
import Navbar from '../components/navbar/Navbar';
import AboutUs from '../components/about/AboutUs';
import Goal from '../components/about/Goal';
import Follow from '../components/about/Follow';
import Mission from '../components/about/Mission';

const About = () => {
  return (
    <>
      <Navbar></Navbar>
      <AboutUs></AboutUs>
      <Goal></Goal>
      <Follow></Follow>
      <Mission></Mission>
    </>
  )
}

export default About