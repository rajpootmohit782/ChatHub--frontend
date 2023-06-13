import React, { useState, useEffect } from 'react';
import './AuthComponent.css';

const AuthComponent = ({ handleChange }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false); // New state for loading animation
  const backgroundColor = 'rgb(30, 144, 255)';

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleAuth = async () => {
    setIsLoading(true); // Start the loading animation
    console.log('hit Inside');
    try {
      const response = await fetch('https://349dw5-5000.csb.app/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username, password: password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Authentication successful:', data);
        setData(data);
        handleChange({ data });

        //console.log(setOnauth);
        // Handle successful authentication
      } else {
        console.error('Authentication failed');
        // Handle authentication failure
      }
    } catch (error) {
      console.error('Error during authentication:', error);
      // Handle error
    } finally {
      setIsLoading(false); // Stop the loading animation
    }
  };

  useEffect(() => {
    // Clean up the loading animation when the component unmounts
    return () => {
      setIsLoading(false);
    };
  }, []);

  return (
    <div
      style={{
        background: backgroundColor,
        width: '100%',
        height: '100vh',
      }}
    >
      <div className="auth-container">
        <h1>Chat App Authentication</h1>
        <div className="auth-input-container">
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            placeholder="Enter username"
            className="auth-input"
          />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Enter password"
            className="auth-input"
          />
        </div>
        <button
          onClick={handleAuth}
          className={`auth-button ${isLoading ? 'loading' : ''}`}
        >
          {isLoading ? 'Authenticating...' : 'Authenticate'}
        </button>
      </div>
    </div>
  );
};

export default AuthComponent;
