import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { UserContext } from '../providers/UserProvider';
import Input from '../general/Input';
import Button from '../general/Button';
import './authentication.css';

function Authentication() {
  const { registered, handleRegister, passwordValue, setPasswordValue } =
    useContext(AuthContext);

  const { setIsLoggedIn, usernameValue, setUsernameValue } =
    useContext(UserContext);

  return (
    <div className="authenticationPage">
      <div className="entryContainer">
        <div className="entryHeader">
          {registered ? (
            <div className="entryHeaderButtonActive">
              <p>Sign In</p>
            </div>
          ) : (
            <div
              onClick={() => handleRegister(true)}
              className="entryHeaderButton"
            >
              <p>Sign In</p>
            </div>
          )}
          {registered ? (
            <div
              onClick={() => handleRegister(false)}
              className="entryHeaderButton"
            >
              <p>Sign Up</p>
            </div>
          ) : (
            <div className="entryHeaderButtonActive">
              <p>Sign Up</p>
            </div>
          )}
        </div>
        <div className="entryBody">
          <h2 style={{ fontWeight: '400', textAlign: 'center' }}>
            {registered ? 'Sign in with your account' : 'Create a new account'}
          </h2>
          <Input
            type="text"
            label="Username:"
            className="entryInput"
            value={usernameValue}
            setValue={setUsernameValue}
          />
          <Input
            type="password"
            label="Password:"
            className="entryInput"
            value={passwordValue}
            setValue={setPasswordValue}
          />
          {registered ? (
            <Button
              label="Sign In"
              onClick={() => setIsLoggedIn(true)}
              className="entryButton"
            />
          ) : (
            <Button
              label="Sign Up"
              onClick={() => {}}
              className="entryButton"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Authentication;
