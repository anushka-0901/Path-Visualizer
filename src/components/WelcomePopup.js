import React from 'react';
import './WelcomePopup.css';

const WelcomePopup = ({ onClose }) => {
  return (
    <div className="popup-container">
      <div className="popup">
        <h2>Welcome to the Path Visualizer App</h2>
        <button onClick={onClose}>Continue</button>
      </div>
    </div>
  );
};

export default WelcomePopup;
