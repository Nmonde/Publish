import React, { useState } from 'react';
import './styles/WelcomePage.css';

const WelcomePage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(`Login: Username - ${username}, Password - ${password}`);
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
          <button type="button" onClick={handleLogin} className="button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default WelcomePage;
