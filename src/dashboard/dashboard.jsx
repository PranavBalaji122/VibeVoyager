import { useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './dashboard.css';
import handleSubmit from '../utility/firebase.js';

function Dashboard() {
    return (
    <div className="container">
      <div className="register-box">
        <h1 className="title">Vibe Voyager</h1>
        <form onSubmit={handleSubmit}>
          <button type="submit" className="reccomendations-button">
            Generate Reccomendations
          </button>
        </form>
        <p className="-text">
          Connect to Spotify to see suggestions based on your music taste{' '}
          <a href="#" className="spotify-link">
            Connect
          </a>
        </p>
      </div>
    </div>
    );
}

export default Dashboard;   