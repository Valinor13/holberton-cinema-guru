import React from 'react';
import { AuthProvider } from './components/providers/AuthProvider';
import Authentication from './components/authentication/Authentication';
import './App.css';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Authentication />
      </AuthProvider>
    </div>
  );
}

export default App;
