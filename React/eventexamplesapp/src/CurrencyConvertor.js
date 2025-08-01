import React, { useState } from 'react';

const CurrencyConvertor = () => {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // synthetic event
    const rupeeValue = parseFloat(rupees);
    if (!isNaN(rupeeValue)) {
      setEuro((rupeeValue / 89.5).toFixed(2)); // Assume 1 Euro = 89.5 INR
    }
  };

  return (
    <div>
      <h2>Currency Convertor</h2>
      <form onSubmit={handleSubmit}>
        <label>Enter amount in INR:</label><br />
        <input
          type="number"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
        /><br /><br />
        <button type="submit">Convert</button>
      </form>

      {euro && (
        <p>Converted to Euros: €{euro}</p>
      )}
    </div>
  );
};

export default CurrencyConvertor;
