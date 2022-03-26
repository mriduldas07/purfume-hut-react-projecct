import React, { useState } from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    const {name,img} = cart;
    return (
        <div className='display-cart'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="cart-name">
                <h3>{name}</h3>
            </div>
        </div>
    );
};

export default Cart;