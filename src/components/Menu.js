import React, { useEffect, useState } from 'react'

const Menu = () => {
    const data = [
        { 
            id: 1, 
            name: 'Low Carb Pizza', 
            description: 'Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.', 
            price: 34, 
            image:'./img/pizza6.png'
        },
        {
            id: 2, 
            name: 'Pizza Biscuit Bake', 
            description: 'Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.', 
            price: 38, 
            image:'./img/pizza2.png'
        },
        {
            id: 3, 
            name: 'Pizza Prosciutto', 
            description: 'Nullam nibh sem, imperdiet ultrices commodo a, vulputate vel ligula. Duis venenatis at eros sed egestas. Mauris rutrum quam risus, vel hendrerit dui tempor in.', 
            price: 32, 
            image:'./img/pizza5.png'
        }

    ];
    const [items, setItems] = useState([])
    useEffect(() => {
        console.log("trigger");
        setItems(data)
    },[])
    

    return (
        <div className="menu">
        <div className="container">
            <div className="row">
                <div className="menu-content">
                    <h2>Welcome to Pizza Maestro Pizzini</h2>
                    <p>Our Menu</p>
                </div>
                <div className="menu-list">
                    <ul>
                        {
                            items.map((item) =><li key={item.id}>
                                <div className="col-md-2 menu-item-img">
                                    <img src={ item.image} alt="" />
                                </div>
                                <div className="col-md-8 menu-item-details">
                                    <h3>{ item.name }</h3>
                                    <p>{ item.description }</p>
                                </div>
                                <div className="col-md-2 menu-item-price">
                                    <p> <span>$</span>{ item.price } </p>
                                </div>
                            </li>)
                        }
                        
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Menu;