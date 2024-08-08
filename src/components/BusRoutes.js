// src/components/BusRoutes.js
import React from 'react';
import './BusRoutes.css';

const BusRoutes = () => {
  // Sample data for bus routes (30 entries)
  const busData = Array.from({ length: 30 }, (_, index) => ({
    number: `B${index + 1}`,
    starting: `Area ${index + 1}`,
    lastStop: `Area ${index + 6}`,
  }));

  return (
    <div className="bus-routes-container">
      <table className="bus-routes-table">
        <thead>
          <tr>
            <th style={{ width: '20%' }}>Bus Number</th>
            <th style={{ width: '25%' }}>Starting Stop</th>
            <th style={{ width: '25%' }}>Last Stop</th>
            <th style={{ width: '30%' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {busData.map((bus, index) => (
            <tr key={index}>
              <td>{bus.number}</td>
              <td>{bus.starting}</td>
              <td>{bus.lastStop}</td>
              <td>
                <button className="action-btn">Add</button>
                <button className="action-btn">Delete</button>
                <button className="action-btn">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BusRoutes;
