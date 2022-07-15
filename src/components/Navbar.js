import React, { useState } from 'react';

const Navbar = () => {
    const [background, setBackground] = useState(false);

    const changeNavColor = () => {
        if(window.scrollY > 20) {
            setBackground(true)
        } else {
            setBackground(false)
        }
    }
    window.addEventListener('scroll', changeNavColor);
    return (
        <div className={background ? 'top-navbar bg-black' : 'top-navbar'}>
            <div className="container">
                <div className="navbar-content">
                    <div className="navbar-img">
                        <img src="./img/logo.png" alt="Maestro Pizza" />
                    </div>
                    <div className="navbar-list">
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Menu</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>  
        </div>
    )
}

export default Navbar