import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './components/providers/AuthProvider';
import { UserContext } from './components/providers/UserProvider';
import { NavigationProvider } from './components/providers/NavigationProvider';
import Authentication from './components/authentication/Authentication';
import Dashboard from './routes/dashboard/Dashboard';
import Favorites from './routes/dashboard/Favorites';
import WatchLater from './routes/dashboard/WatchLater';

import './App.css';

function App() {
  const { isLoggedIn } = useContext(UserContext);

  return (
    <div className="App">
      {isLoggedIn ? (
        <NavigationProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/watchLater" element={<WatchLater />} />
            </Routes>
          </Router>
        </NavigationProvider>
      ) : (
        <AuthProvider>
          <Authentication />
        </AuthProvider>
      )}
    </div>
  );
}

export default App;
