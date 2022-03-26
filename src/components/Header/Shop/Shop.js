import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Product from '../../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() =>{
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);
    const handleAddToCart = (product) =>{
        const newCart = [...cart, product];
        if (newCart.length <= 4) {
            setCart(newCart)
        }
    }

    return (
        <div className='shop-container'>
            <div className='product-container'>
            {
                products.map(product => <Product
                key={product.id}
                product={product}
                handleAddToCart={handleAddToCart}
                ></Product>)
            }
            </div>
            <div  className='cart'>
            <h1>Selected Items </h1>
                {
                    cart.map(items => <Cart 
                        cart={items}
                        key={items.id}
                        ></Cart>)
                }
            </div>
        </div>
    );
};

export default Shop;