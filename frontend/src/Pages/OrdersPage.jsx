import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CSS/OrdersPage.css'; // Create a new CSS file for styling

export const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchOrders = async () => {
      const token = localStorage.getItem('authToken');
      if (!token) {
        setError('You must be logged in to view orders.');
        setLoading(false);
        return;
      }

      try {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        const response = await axios.get('http://localhost:5001/api/orders/myorders', config);
        setOrders(response.data);
      } catch (err) {
        setError('Failed to fetch orders.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <div>Loading orders...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="orders-page">
      <h2>My Orders</h2>
      {orders.length === 0 ? (
        <p>You have no past orders.</p>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div key={order._id} className="order-card">
              <div className="order-header">
                <h3>Order ID: {order._id}</h3>
                <p>Date: {new Date(order.createdAt).toLocaleDateString()}</p>
              </div>
              <div className="order-body">
                {order.orderItems.map((item) => (
                  <div key={item.product} className="order-item">
                    <p>{item.name} (x{item.quantity})</p>
                    <p>${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>
              <div className="order-footer">
                <p>Status: {order.orderStatus}</p>
                <h4>Total: ${order.totalPrice.toFixed(2)}</h4>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default OrdersPage;
