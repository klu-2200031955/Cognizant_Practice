import React from 'react';

const ListofPlayers = () => {
  const players = [
    { name: 'Virat', score: 90 },
    { name: 'Rohit', score: 45 },
    { name: 'Dhoni', score: 75 },
    { name: 'Raina', score: 66 },
    { name: 'Ashwin', score: 30 },
    { name: 'Jadeja', score: 85 },
    { name: 'Shami', score: 50 },
    { name: 'Kohli', score: 77 },
    { name: 'Pandya', score: 62 },
    { name: 'Gill', score: 88 },
    { name: 'Kishan', score: 40 }
  ];

  const below70 = players.filter(player => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
      <h3>Players with score below 70</h3>
      <ul>
        {below70.map((player, index) => (
          <li key={index}>{player.name} - {player.score}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListofPlayers;
