import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const { products, initialCart } = useLoaderData();
    const [cart, setCart] = useState(initialCart);
    const clearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }
    const handleRemoveItems = (id) => {
        console.log(id);
        const remCart = cart.filter(product => product.id !== id);
        setCart(remCart);
        removeFromDb(id);
    }
    return (
        <div>
            <div className="shop-container">
                <div className="orders-container">
                    {cart.map(product => <ReviewItem key={product.id} product={product} handleRemoveItems={handleRemoveItems}></ReviewItem>)}
                    {
                        cart.length === 0 && <h2>No Items in this cart.Please <Link to="/shop">Shop More</Link> </h2>
                    }
                </div>
                <div className="cart-container">
                    <Cart cart={cart} clearCart={clearCart}>
                    <button><Link to="/shipping"> Go to Shipping</Link></button>
                    </Cart>
                </div>
           </div>
        </div>
    );
};

export default Orders;