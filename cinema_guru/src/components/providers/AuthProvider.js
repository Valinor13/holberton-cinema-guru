import React, { useState } from 'react';

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [registered, Register] = useState(true);
  const [usernameValue, setUsernameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  function handleRegister(isRegistered) {
    Register(isRegistered);
  }

  return (
    <AuthContext.Provider
      value={{
        registered,
        handleRegister,
        usernameValue,
        setUsernameValue,
        passwordValue,
        setPasswordValue,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
