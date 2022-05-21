import React, { useContext } from 'react';
import { AuthProvider } from './components/providers/AuthProvider';
import { UserContext } from './components/providers/UserProvider';
import { NavigationProvider } from './components/providers/NavigationProvider';
import Authentication from './components/authentication/Authentication';
import Dashboard from './routes/dashboard/Dashboard';
import './App.css';
import SideBar from './components/navigation/SideBar';

function App() {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <div className="App">
      {isLoggedIn ? (
        <>
          <Dashboard />
          <NavigationProvider>
            <SideBar />
          </NavigationProvider>
        </>
      ) : (
        <AuthProvider>
          <Authentication />
        </AuthProvider>
      )}
    </div>
  );
}

export default App;
