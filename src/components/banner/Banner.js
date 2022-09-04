import React from 'react'
import './banner.css';
import BannerImg from './BannerImg';

const Banner = () => {
  return (
    <section className="banner">
        <div className="container">
            <div className="box">
                <div className="text">
                    <h2>Building stellar websites for early startups</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                    <a className="button">View our work</a>
                    <a className="pricing">View pricing <i className="fa-solid fa-right-long"></i></a>
                </div>
                <div className="image">
                    <BannerImg></BannerImg>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Banner