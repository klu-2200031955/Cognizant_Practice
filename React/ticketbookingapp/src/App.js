import React, { useState } from 'react';
import GuestPage from './GuestPage';
import UserPage from './UserPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginToggle = () => {
    setIsLoggedIn(prev => !prev);
  };

  let pageContent;
  if (isLoggedIn) {
    pageContent = <UserPage />;
  } else {
    pageContent = <GuestPage />;
  }

  return (
    <div className="App">
      <h1>✈️ Ticket Booking App</h1>
      <button onClick={handleLoginToggle}>
        {isLoggedIn ? 'Logout' : 'Login'}
      </button>
      {pageContent}
    </div>
  );
}

export default App;
