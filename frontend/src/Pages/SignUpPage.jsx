// frontend/src/Pages/SignUpPage.jsx
import React, { useState } from 'react';
import './SignUpPage.css'; // File made for styling the sign-up page

function SignUpPage() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Basic validation (replace this with actual API calls later)
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

    //send this data to a backend API for registration
    console.log('Attempting to sign up with:', { username, email, password });

    // Simulate a successful registration for now
    setError('');
    //redirect to login page or a success message
    alert('Sign Up Successful! Please log in.');
  };

  return (
    <div className="signup-page-wrapper">
    <div className="signup-container">
      <h2>Create Your GameStop Clone Account</h2>
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
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
    </div>
  );
}

export default SignUpPage;
