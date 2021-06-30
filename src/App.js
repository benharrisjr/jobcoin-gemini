import React, { useState } from 'react';

import LoginPage from './LoginPage';
import Dashboard from './Dashboard';
import NavBar from './NavBar';

function App() {
  const [loggedIn, setLoggedInStatus] = useState(false);
  return (
    <div className="body">
        <NavBar />
        {!loggedIn && <LoginPage setLoggedInStatus={setLoggedInStatus} />}
        {loggedIn && <Dashboard />}
    </div>
  );
}

export default App;
