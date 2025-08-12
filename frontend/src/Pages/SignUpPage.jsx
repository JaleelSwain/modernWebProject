// frontend/src/Pages/SignUpPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignUpPage.css'; // File made for styling the sign-up page

function SignUpPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // --- Client-side validation ---
    if (username === '' || email === '' || password === '' || confirmPassword === '') {
      setError('Please fill in all fields.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    if (password.length < 6) {
        setError('Password must be at least 6 characters long.');
        return;
    }

    // --- API Call ---
    try {
      const newUser = {
        username,
        email,
        password,
      };

      // Make the POST request to your backend's register endpoint
      await axios.post('http://localhost:5001/api/auth/register', newUser);

      // If registration is successful, redirect to the login page
      navigate('/login');

    } catch (err) {
      // Handle errors from the backend (e.g., user already exists)
      if (err.response && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError('Registration failed. Please try again.');
      }
      console.error('Sign up error:', err);
    }
  };

  return (
    <div className="signup-page-wrapper">
      <div className="signup-container">
        <h2>Create Your jmGames Account</h2>
        <form onSubmit={handleSubmit} className="signup-form">
          {error && <p className="error-message">{error}</p>}
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
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
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
        <p className="login-link">
          Already have an account? <span onClick={() => navigate('/login')} style={{ cursor: 'pointer', color: '#007bff' }}>Login here</span>
        </p>
      </div>
    </div>
  );
}

export default SignUpPage;
