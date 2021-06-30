import React, { useState } from 'react';

function LoginPage(props) {
  // const [loggedIn, setLoggedInStatus] = useState(false);
  return (
    <div className="container">
      <img alt="Jobcoin Logo" src="" />
      <h1>Welcome! Sign in with your Jobcoin Address</h1>
      <div>
        <label style={{ display: 'block', fontSize: '10px', color: '#333', textAlign: 'left' }} for="jobcoin-address">Jobcoin Address</label>
        <input style={{ display: 'block' }} name="jobcoin-address" placeholder="Address" type="text" />
      </div>
      <div>
        <button onClick={() => props.setLoggedInStatus(true)}>Sign In</button>
      </div>
    </div>
  );
}

export default LoginPage;
