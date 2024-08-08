// src/components/Topbar.js
import React from 'react';
import './Topbar.css'; // Ensure this imports correctly
import logo from '../assets/logo.png'; // Adjust path as necessary

const Topbar = () => {
  const adminName = "Admin"; // Admin name

  return (
    <div className="topbar">
      <div className="welcome-message">
        Welcome, {adminName}!
      </div>
      <div className="app-name">
        <img src={logo} alt="Logo" />
        <h1>SmartTransit</h1>
      </div>
      <div className="admin-username">
        admin@srit.ac.in
      </div>
    </div>
  );
};

export default Topbar;
