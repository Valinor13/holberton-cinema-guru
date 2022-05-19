import React, { useState } from 'react';

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [registered, Register] = useState(true);

  function handleRegister(isRegistered) {
    Register(isRegistered);
  }

  return (
    <AuthContext.Provider value={{ registered, handleRegister }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, AuthContext };
