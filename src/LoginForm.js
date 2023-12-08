import React from 'react';

const containerStyle = {
  textAlign: 'center',
  margin: '50px auto',
  width: '300px',
  padding: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
};

const inputStyle = {
  margin: '10px 0',
  padding: '8px',
  width: '100%',
  boxSizing: 'border-box',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '10px 15px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const forgotPasswordStyle = {
  color: 'blue',
  textDecoration: 'underline',
  cursor: 'pointer',
};

const LoginForm = () => {
  return (
    <div style={containerStyle}>
      <h2>Login</h2>
      <form>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" style={inputStyle} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" style={inputStyle} />
        </div>
        <button type="submit" style={buttonStyle}>
          Login
        </button>
      </form>
      <p style={forgotPasswordStyle}>Forgot Password?</p>
    </div>
  );
};

export default LoginForm;
