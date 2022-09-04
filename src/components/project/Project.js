import React from 'react'
import './project.css'

const Project = () => {
  return (
    <>
        <section className="project">
            <div className="container">
                <div className="protext">
                    <h2>View our projects</h2>
                    <a className="pricing">View More <i className="fa-solid fa-right-long"></i></a>
                </div>
                <div className="box">
                    <div className="cardleft">
                        <img src="assets/images/procard.png" alt="procard"/>
                        <div className="text-box">
                            <div className="details">
                                <h3>Workhub office Webflow Webflow Design</h3>
                                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
                                <a className="pricing">View project <i className="fa-solid fa-right-long"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="cardright">
                        <div className="image">
                            <img src="assets/images/prorightcard.png" alt="prorightcard"/>
                            <div className="text-box">
                                <div className="details">
                                    <h3>Unisaas Website Design</h3>
                                    <a className="pricing">View project <i className="fa-solid fa-right-long"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="image">
                            <img src="assets/images/prorightcard.png" alt="prorightcard"/>
                            <div className="text-box">
                                <div className="details">
                                    <h3>Unisaas Website Design</h3>
                                    <a className="pricing">View project <i className="fa-solid fa-right-long"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Project