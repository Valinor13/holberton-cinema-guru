import React, { useState } from 'react';

const NavigationContext = React.createContext();

function NavigationProvider({children}) {
  const [navPage, setNavPage] = useState('home');

  return <NavigationContext.Provider value={{ navPage, setNavPage }}>{children}</NavigationContext.Provider>;
}

export { NavigationProvider, NavigationContext };
