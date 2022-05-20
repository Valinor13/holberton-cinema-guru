import React, { useState } from 'react';

const UserContext = React.createContext();

function UserProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [usernameValue, setUsernameValue] = useState('');

  return (
    <UserContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, usernameValue, setUsernameValue }}
    >
      {children}
    </UserContext.Provider>
  );
}

export { UserProvider, UserContext };
