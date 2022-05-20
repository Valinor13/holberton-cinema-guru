import React, { useContext } from 'react';
import { AuthProvider } from './components/providers/AuthProvider';
import { UserContext } from './components/providers/UserProvider';
import Authentication from './components/authentication/Authentication';
import Dashboard from './routes/dashboard/Dashboard';
import './App.css';

function App() {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <div className="App">
      {isLoggedIn ? (
        <Dashboard />
      ) : (
        <AuthProvider>
          <Authentication />
        </AuthProvider>
      )}
    </div>
  );
}

export default App;
