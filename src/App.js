import { useState, useEffect } from 'react';
import LoginPage from './pages/LoginPage';
import Dashboard from './pages/Dashboard';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('token')) setLoggedIn(true);
  }, []);

  return loggedIn
    ? <Dashboard onLogout={() => setLoggedIn(false)} />
    : <LoginPage onLogin={() => setLoggedIn(true)} />;
}
export default App;