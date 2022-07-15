import React from 'react';

const Contact = () => {

    return (
        <div className="about-us contact-us">
            <div className="about-us-intro">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div className="about-us-content contact-us-content">
                                <h2>Quick Delivery</h2>
                                <h3>Order A Pizza Now</h3>
                                <p>Investigationes demonstraverunt lectores legere me lius
                                    quod ii legunt saepius. Claritas est etiam processus dynaus,
                                    quise sequitur mutationem consuetudium lectorum.</p>

                                <form action="">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <input type="text" name="" id="" placeholder="First Name" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" name="" id="" placeholder="Last Name" />
                                        </div>
                                        <div className="col-md-12">
                                            <input type="email" name="" id="" placeholder="Email Street Address" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="text" name="" id="" placeholder="Apartment/Room" />
                                        </div>
                                        <div className="col-md-6">
                                            <input type="tel" name="" id="" placeholder="Phone Number" />
                                        </div>
                                        <div className="col-md-6">
                                            <select name="" id="" placeholder="Pizza Type">
                                                <option value="">Pizza Biscuit Bake</option>
                                                <option value="">Low Curb Pizza</option>
                                                <option value="">Pizza Prosciutto</option>
                                            </select>
                                        </div>
                                        <div className="col-md-6">
                                            <select name="" id="" placeholder="Pizza Type">
                                                <option value="">Small - 10cm/25cm</option>
                                                <option value="">Medium - 12cm/30cm</option>
                                                <option value="">Large - 14cm/35cm</option>
                                                <option value="">XL - 16/40cm</option>
                                            </select>
                                        </div>
                                        <div className="col-md-12">
                                            <a href="#" className="button page-button">Order Now</a>
                                        </div>

                                    </div>
                                </form>    
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="about-us-content">
                                {/* <img src="./img/maestropizzini_post2-2-900x550.jpg" alt="" /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;