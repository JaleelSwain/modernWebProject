// frontend/src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import routing components
import { Navbar } from './Components/Navbar/Navbar';
import LoginPage from './Components/LoginPage/LoginPage'; // Ensure it's default imported if you used 'export default'
import './App.css';

function App() {
  return (
    // BrowserRouter wraps your entire application that needs routing capabilities
    <Router>
      <div>
        {/* The Navbar will always be visible, regardless of the current route */}
        <Navbar />

        {/* Routes defines the different paths and the components to render for each */}
        <Routes>
          {/* Define your homepage route. You might have an actual HomePage component.
              For now, let's just show a simple message or another component here.
              If you have a separate HomePage component, import it and use it like <Route path="/" element={<HomePage />} />
          */}
      

          {/* This route will render the LoginPage component when the URL is /login */}
          <Route path="/login" element={<LoginPage />} />

          {/* You can add more routes here for other pages (e.g., /signup, /products) */}
          {/* <Route path="/signup" element={<SignupPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
