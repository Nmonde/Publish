import React, { useState } from 'react';
import './styles/WelcomePage.css';
import { Link, useNavigate } from 'react-router-dom';
// import { User } from '../../../../backend/db/userModel';
import axios from 'axios';

const WelcomePage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post('http://localhost:3000/users/register', { username, password });
 
      // Clear input fields after successful registration
 setUsername('');
 setPassword('');
      // Navigate to the new page after successful registration
      navigate('/content');
    } catch (error) {
      console.error('Error registering user:', error);
    }
  };

  return (
    <div className="page-container">
      <h1>Welcome to Publish</h1>
      <div className="container">
        <form>
          <label className="label">
            Username:
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="input"
            />
          </label>
          <br />
          <label className="label">
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input"
            />
          </label>
          <br />
          <button type="button" onClick={handleRegister} className="button">
            Register
          </button>
        </form>
      </div>

    </div>
  );
};

export default WelcomePage;
