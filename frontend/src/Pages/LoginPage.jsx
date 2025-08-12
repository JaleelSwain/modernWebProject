// frontend/src/Pages/LoginPage/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import axios
import './LoginPage.css';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Make the function async to handle the API call
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Set up the data to be sent to the backend
      const loginData = {
        email,
        password,
      };

      // Make the POST request to your backend's login endpoint
      const response = await axios.post('http://localhost:5001/api/auth/login', loginData);

      // If the login is successful, the backend will send back user data and a token
      console.log('Login Successful!', response.data);

      // --- CRITICAL NEXT STEP ---
      // You must save the token to use it for future authenticated requests.
      // For example, using localStorage:
      localStorage.setItem('authToken', response.data.token);
      localStorage.setItem('userInfo', JSON.stringify(response.data));


      // Clear any previous errors
      setError('');

      // Redirect to the home page
      navigate('/');

    } catch (err) {
      // If the backend returns an error (e.g., wrong password), it will be in err.response.data
      if (err.response && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        // For other errors like network issues
        setError('Login failed. Please try again.');
      }
      console.error('Login error:', err);
    }
  };

  return (
    <div className="login-page-wrapper">
      <div className="login-container">
        <h2>Login to jmGames</h2>
        <form onSubmit={handleSubmit} className="login-form">
          {error && <p className="error-message">{error}</p>}
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
        <p className="signup-link">
          Don't have an account? <span onClick={() => navigate('/signup')} style={{ cursor: 'pointer', color: '#e4002b', textDecoration: 'none', fontWeight: 'bold' }}>Sign Up</span>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
// Note: Make sure to handle the token securely in your application.