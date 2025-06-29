// frontend/src/Pages/LoginPage/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './LoginPage.css'; // File made for styling the login page

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Initialize navigate hook

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Basic validation (you'll replace this with actual API calls)
    if (email === '' || password === '') {
      setError('Please enter both email and password.');
      return;
    }

    // send these credentials to a backend API
    // For now, let's just log them and simulate success/failure
    console.log('Attempting to log in with:', { email, password });

    // Simulate an API call
    if (email === 'user@example.com' && password === 'password123') {
      setError('');
      // Using a custom modal/message box instead of alert()
      <div className="modal">
        <p>Login Successful!</p>
      </div>
      console.log('Login Successful!');
      // Redirect to a dashboard or home page
      navigate('/'); // Example: navigate to home page on successful login
    } else {
      setError('Invalid email or password.');
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
