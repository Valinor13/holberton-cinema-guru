import React, { useState } from 'react';

const NavigationContext = React.createContext();

function NavigationProvider({ children }) {
  const [navPage, setNavPage] = useState('/');
  const [sidebarExpanded, setSidebarExpanded] = useState(false);

  return (
    <NavigationContext.Provider
      value={{ navPage, setNavPage, setSidebarExpanded, sidebarExpanded }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider, NavigationContext };
