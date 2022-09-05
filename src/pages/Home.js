import React from 'react';
import Banner from '.././components/banner/Banner';
import Blog from '.././components/blog/Blog';
import Client from '.././components/client/Client';
import CopyRight from '.././components/copyright/CopyRight';
import Design from '.././components/design/Design';
import Faq from '.././components/faq/Faq';
import Footer from '.././components/footer/Footer';
import StartUp from '.././components/inquiry/StartUp';
import Navbar from '.././components/navbar/Navbar';
import Project from '.././components/project/Project';
import Work from '.././components/work/Work';

const Home = () => {
  return (
    <>
        <Navbar></Navbar>
        <Banner></Banner>
        <Work></Work>
        <Project></Project>
        <Design></Design>
        <Client></Client>
        <Faq></Faq>
        <StartUp></StartUp>
        <Blog></Blog>
        <Footer></Footer>
        <CopyRight></CopyRight>
    </>
  )
}

export default Home