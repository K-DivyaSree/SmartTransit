// src/App.js
import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import BusRoutes from './components/BusRoutes'; // Import BusRoutes component
import './App.css';

function App() {
  const [activeComponent, setActiveComponent] = useState(''); // State to manage active component

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case 'busRoutes':
        return <BusRoutes />;
      // Add more cases for other components here
      default:
        return null; // Return null instead of a default message
    }
  };

  return (
    <div className="App">
      <Topbar />
      <Sidebar setActiveComponent={setActiveComponent} />
      <div className="main-content">
        <div className="content">
          {renderActiveComponent()}
        </div>
      </div>
    </div>
  );
}

export default App;
