import React from 'react';

import Navbar from './Navbar.js'

const Header = () => {
    return (
        <div className="banner">
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="banner-content">
                        <h2>Pizza Delivery</h2>
                        <h1>Maestro Pizinni</h1>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod ut laoreet dolore magna.</p>
                        <a href="#" className="page-button">Deliver Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header