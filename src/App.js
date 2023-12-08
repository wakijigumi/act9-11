import React from 'react';
import LoginForm from './LoginForm';

const containerStyle = {
  textAlign: 'center',
  marginTop: '50px',
};

const App = () => {
  return (
    <div style={containerStyle}>
      <h1>Login ka dito Sir :D</h1>
      <LoginForm />
    </div>
  );
};

export default App;
