import axios from 'axios';

// Create a central axios instance with the base URL of your backend
const API = axios.create({
  baseURL: 'http://localhost:5001/api'
});

// Add a request interceptor to include the token in every request
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// --- Authentication Calls ---
export const loginUser = (loginData) => API.post('/auth/login', loginData);
export const registerUser = (newUserData) => API.post('/auth/register', newUserData);

// --- Product Calls ---
export const fetchProducts = () => API.get('/products');

// --- Order Calls ---
export const createOrder = (orderData) => API.post('/orders', orderData);
export const getUserOrders = () => API.get('/orders/myorders');

// You can add more functions here as your app grows
// export const getProductById = (id) => API.get(`/products/${id}`);
