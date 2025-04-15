import React, { useState, useEffect } from 'react';
import './App.css'
import LoginPage from './loginpage'
import Dashboard from './Dashboard';
import './index.css';
import { auth } from './services/auth';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is already logged in
    const checkAuth = () => {
      const isAuth = auth.isAuthenticated();
      console.log('Checking auth status:', isAuth);
      setIsLoggedIn(isAuth);
    };
    
    checkAuth();
  }, []);

  const handleLogin = (userData) => {
    console.log('Login attempted with:', userData);
    const success = auth.login(userData);
    console.log('Login success:', success);
    if (success) {
      setIsLoggedIn(true);
    }
  };

  const handleLogout = () => {
    auth.logout();
    setIsLoggedIn(false);
  };

  console.log('Current login state:', isLoggedIn);
  console.log('Current user:', auth.getCurrentUser());

  return isLoggedIn ? (
    <Dashboard onLogout={handleLogout} user={auth.getCurrentUser()} />
  ) : (
    <LoginPage onLogin={handleLogin} />
  );
}

export default App;