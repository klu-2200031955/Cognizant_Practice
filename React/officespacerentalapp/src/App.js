import React from 'react';

function App() {
  // Single office object
  const singleOffice = {
    name: "Tech Tower",
    rent: 55000,
    address: "MG Road, Bangalore"
  };

  // List of office spaces
  const officeList = [
    { name: "Startup Hub", rent: 45000, address: "Koramangala, Bangalore" },
    { name: "BizNest", rent: 70000, address: "Hitech City, Hyderabad" },
    { name: "CodeSpace", rent: 62000, address: "Cyber Park, Noida" },
    { name: "InnoSpace", rent: 58000, address: "T-Nagar, Chennai" }
  ];

  // Style function for rent
  const rentStyle = (rent) => ({
    color: rent > 60000 ? 'green' : 'red',
    fontWeight: 'bold'
  });

  return (
    <div className="App">
      {/* Heading element */}
      <h1>Office Space Rental Portal</h1>

      {/* Image element */}
      <img 
        src="https://images.unsplash.com/photo-1586262611739-1fbe8b248e16" 
        alt="Office Space" 
        width="500px"
      />

      {/* Single office details */}
      <h2>Featured Office:</h2>
      <p><strong>Name:</strong> {singleOffice.name}</p>
      <p style={rentStyle(singleOffice.rent)}>
        <strong>Rent:</strong> ₹{singleOffice.rent}
      </p>
      <p><strong>Address:</strong> {singleOffice.address}</p>

      {/* Looping through office list */}
      <h2>Available Spaces:</h2>
      <ul>
        {officeList.map((office, index) => (
          <li key={index}>
            <p><strong>Name:</strong> {office.name}</p>
            <p style={rentStyle(office.rent)}><strong>Rent:</strong> ₹{office.rent}</p>
            <p><strong>Address:</strong> {office.address}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
