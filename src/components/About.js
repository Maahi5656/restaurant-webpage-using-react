import React from 'react';

const About = () => {
    return (
        <div className="about-us">
            <div className="about-us-intro">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="about-us-content">
                                <h2>About Us</h2>
                                <h3>Welcome To Maestro Pizzini</h3>
                                <p>Investigationes demonstraverunt lectores legere me lius
                                    quod ii legunt saepius. Claritas est etiam processus dynaus,
                                    quise sequitur mutationem consuetudium lectorum.</p>
                                <a href="#" className="page-button">Read More...</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="about-us-content">
                                <img src="./img/maestropizzini_post2-2-900x550.jpg" alt="Pizza" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-us-info">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <p>120</p>
                            <span>Awesome Employees</span>
                        </div>
                        <div className="col-md-3">
                            <p>50</p>
                            <span>Pizza Type</span>
                        </div>
                        <div className="col-md-3">
                            <p>1468</p>
                            <span>Satisfied Clients</span>
                        </div>
                        <div className="col-md-3">
                            <p>2030</p>
                            <span>Delivery</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;