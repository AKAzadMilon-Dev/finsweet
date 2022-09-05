import React from 'react';
import './copyright.css';

const CopyRight = () => {
  return (
    <section className='copyright'>
        <div className='container'>
            <div className='box'>
                <div className='copyrighttext'>
                    <p>Copyright 2022, Finsweet.com</p>
                </div>
                <div className='menu'>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Features</li>
                        <li>Pricing</li>
                        <li>FAQ</li>
                        <li>Blog</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CopyRight