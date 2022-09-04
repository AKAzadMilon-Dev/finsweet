import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    
        <nav className="nav">
            <div className="container">
                <div className="box">
                    <div className="logo">
                        <img src="assets/images/logo.png" alt=""/>
                    </div>
                    <div className="nav-item">
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Features</li>
                            <li>Prices</li>
                            <li>FAQ</li>
                            <li>Blogs</li>
                        </ul>
                        <a href="#">Contact us</a>
                    </div>
                </div>
            </div>
        </nav>
    
  )
}

export default Navbar