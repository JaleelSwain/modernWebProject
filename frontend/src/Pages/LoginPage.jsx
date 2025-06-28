// frontend/src/components/LoginPage.js
import React, { useState } from 'react';
import './LoginPage.css'; // File made for styling the login page

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Basic validation (you'll replace this with actual API calls) find api calls for validation to reaplce this with
    if (email === '' || password === '') {
      setError('Please enter both email and password.');
      return;
    }

    // In a real application, you would send these credentials to a backend API
    // For now, let's just log them and simulate success/failure
    console.log('Attempting to log in with:', { email, password });

    // Simulate an API call
    if (email === 'user@example.com' && password === 'password123') {
      setError('');
      alert('Login Successful!');
      // Redirect to a dashboard or home page
      // For now, just logging
    } else {
      setError('Invalid email or password.');
    }
  };

  return (
    <div className="login-container">
      <h2>Login to GameStop Clone</h2>
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
        Don't have an account? <a href="/signup">Sign Up</a>
      </p>
    </div>
  );
}

export default LoginPage;