// This component is updated to use the new confirmation modal.

import React, { useContext, useState } from "react"; // Import useState
import "./CartItems.css";
import { ShopContext } from "../../Context/ShopContext";
import remove_icon from "../Assets/cart_cross_icon.png";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// FIX: Corrected the import path for the modal
import { ConfirmationModal } from "../ConfirmationModal/ConfirmationModal"; 

export const CartItems = () => {
  const { getTotalCartAmount, all_products, cartItems, removeFromCart, clearCart } = useContext(ShopContext);
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control the modal

  const handleCheckout = async () => {
    setIsModalOpen(false); // Close the modal first
    const token = localStorage.getItem('authToken');
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

    if (!token || !userInfo) {
      navigate('/login');
      return;
    }

    const orderItems = Object.keys(cartItems)
      .map(itemId => {
        const item = all_products.find(product => product._id === itemId);
        if (item && cartItems[itemId] > 0) {
          return {
            product: item._id, 
            name: item.name,
            quantity: cartItems[itemId],
            price: item.price,
          };
        }
        return null;
      }).filter(Boolean);

    if (orderItems.length === 0) {
      console.log("Your cart is empty.");
      return;
    }

    const orderData = {
      orderItems,
      totalPrice: getTotalCartAmount(),
      shippingAddress: {
        address: '123 Main St', city: 'Anytown', postalCode: '12345', country: 'USA',
      },
    };

    try {
      const config = { headers: { Authorization: `Bearer ${token}` } };
      await axios.post('http://localhost:5001/api/orders', orderData, config);
      console.log('Order placed successfully!');
      if(clearCart) clearCart();
      navigate('/');
    } catch (error) {
      console.error('Failed to place order:', error);
    }
  };

  return (
    <>
      <ConfirmationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleCheckout}
        message="Are you sure you want to place this order?"
      />
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
        {all_products.map((e) => {
            const quantity = cartItems[e._id] || 0;
            if (quantity > 0) {
                return (
                    <div key={e._id}>
                        <div className="cartitems-format-main">
                            <img src={`http://localhost:5001${e.imageUrl || e.image}`} alt={e.name} className="carticon-product-icon" />
                            <p>{e.name}</p>
                            <p>${e.price}</p>
                            <button className="cartitems-quantity">{quantity}</button>
                            <p>${e.price * quantity}</p>
                            <img className='cartitems-remove-icon' src={remove_icon} onClick={() => { removeFromCart(e._id); }} alt="Remove" />
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
            <button onClick={() => setIsModalOpen(true)}>PROCEED TO CHECKOUT</button>
          </div>
          <div className="cartitems-promocode">
            <p>If you have a promo code, enter it here</p>
            <div className="cartitems-promobox">
                <input type="text" placeholder="promo code" />
                <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};