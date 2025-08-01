// src/App.js
import React from 'react';
import EventHandlers from './EventHandlers';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  return (
    <div className="App">
      <EventHandlers />
      <hr />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
