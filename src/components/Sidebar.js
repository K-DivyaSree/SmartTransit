// src/components/Sidebar.js
import React from 'react';
import { FaBus, FaUser, FaRoute, FaGraduationCap, FaChalkboardTeacher, FaMapMarkerAlt, FaCog, FaSignOutAlt } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = ({ setActiveComponent }) => {
  return (
    <div className="sidebar">
      <div className="menu-container">
        <button className="menu-item" onClick={() => setActiveComponent('busDetails')}>
          <FaBus /> Bus Details
        </button>
        <button className="menu-item" onClick={() => setActiveComponent('driverDetails')}>
          <FaUser /> Driver Details
        </button>
        <button className="menu-item" onClick={() => setActiveComponent('busRoutes')}>
          <FaRoute /> Bus Routes
        </button>
        <button className="menu-item" onClick={() => setActiveComponent('studentDetails')}>
          <FaGraduationCap /> Student Details
        </button>
        <button className="menu-item" onClick={() => setActiveComponent('facultyDetails')}>
          <FaChalkboardTeacher /> Faculty Details
        </button>
        <button className="menu-item" onClick={() => setActiveComponent('trackBus')}>
          <FaMapMarkerAlt /> Track Bus
        </button>
        <button className="menu-item settings">
          <FaCog /> Settings
        </button>
        <button className="menu-item logout">
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
