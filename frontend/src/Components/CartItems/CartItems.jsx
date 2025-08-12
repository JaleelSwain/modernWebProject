// frontend/src/Components/CartItems/CartItems.jsx
import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const CartItems = () => {
  // FIX: Changed all_product to all_products to match the context provider
  const { getTotalCartAmount, all_products, cartItems, removeFromCart, clearCart } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleCheckout = async () => {
    const token = localStorage.getItem('authToken');
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    if (!token || !userInfo) {
      navigate('/login');
      return;
    }

    // Prepare the 'orderItems' array from your cart
    const orderItems = Object.keys(cartItems)
      .map(Number)
      .filter(itemId => cartItems[itemId] > 0)
      .map(itemId => {
        // FIX: Use the corrected all_products variable
        const item = all_products.find(product => product.id === itemId || product._id === itemId);
        if (!item) return null;
        return {
          product: item._id, 
          name: item.name,
          quantity: cartItems[itemId],
          price: item.price,
        };
      }).filter(Boolean);

    if (orderItems.length === 0) {
      console.log("Your cart is empty.");
      return;
    }

    const orderData = {
      user: userInfo._id,
      orderItems: orderItems,
      totalPrice: getTotalCartAmount(),
      shippingAddress: {
        address: '123 Main St',
        city: 'Anytown',
        postalCode: '12345',
        country: 'USA',
      },
    };

    try {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      await axios.post('http://localhost:5001/api/orders', orderData, config);

      console.log('Order placed successfully!');
      if(clearCart) clearCart();
      navigate('/');

    } catch (error) {
      console.error('Failed to place order:', error);
      console.log('Failed to place order. Please try again.');
    }
  };

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {/* FIX: Check if all_products exists before mapping */}
      {all_products && all_products.map((e) => {
        if (cartItems[e.id] > 0 || cartItems[e._id] > 0) {
          const quantity = cartItems[e.id] || cartItems[e._id];
          return (
            <div key={e.id || e._id}>
              <div className="cartItems-format cartitems-format-main">
                <img src={e.image} alt="" className="carticon-product-icon" />
                <p>{e.name}</p>
                <p>${e.price}</p>
                <button className="cartitems-quantity">{quantity}</button>
                <p>${e.price * quantity}</p>
                <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e.id || e._id); }} alt="" />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};
