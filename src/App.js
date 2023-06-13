import React, { useState } from 'react';
import './style.css';
import AuthComponent from './AuthPage';
import Chatpage from './Chatpages';

export default function App() {
  const [onAuth, setOnAuth] = useState(null);

  function handleChange({ data }) {
    console.log('change successful');
    setOnAuth(data);
  }

  console.log(onAuth);

  return (
    <div>
      {onAuth ? (
        <Chatpage user={onAuth} />
      ) : (
        <AuthComponent handleChange={handleChange} />
      )}
    </div>
  );
}
