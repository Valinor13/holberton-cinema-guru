import React from 'react';
import Input from '../general/Input';
import Button from '../general/Button';
import './authentication.css';

function Login() {
  return (
    <div className="loginContainer">
      <div className="loginHeader">
        <div className="loginHeaderButton">
          <p>Sign In</p>
        </div>
        <div className="loginHeaderButton">
          <p>Sign Up</p>
        </div>
      </div>
      <div className="loginBody">
        <h2 style={{ fontWeight: '400', textAlign: 'center' }}>
          Sign in with your account
        </h2>
        <Input
          type="text"
          label="Username:"
          className="loginInput"
          value=""
          setValue={() => {}}
        />
        <Input
          type="text"
          label="Password:"
          className="loginInput"
          value=""
          setValue={() => {}}
        />
        <Button label="Sign In" onClick={() => {}} className="loginButton" />
      </div>
    </div>
  );
}

export default Login;
