import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = ({product}) => {
    const {name,id,img,price} = product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <h4>Price: {price}</h4>
            </div>
            <button>
                <h3>Add To Cart</h3>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;