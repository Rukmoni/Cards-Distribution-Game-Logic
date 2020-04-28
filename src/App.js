import React, { useState } from "react";
import { createAndGetGame } from "./utils/Banker";
import "./styles.css";

import GameTable from "./components/GameTable";

export default function App() {
  const [count, setCount] = useState(0);
  const [players, setPlayers] = useState([]);

  function runGame() {
    if (count > 0 && count < 52) {
      const playersData = createAndGetGame(count);
      setPlayers(playersData);
    } else {
      alert("Players Count must be between 0 & 52");
    }
  }
  return (
    <div>
      <div className="Header">
        <h1> Cards Distribution Game!</h1>
        <input
          type="number"
          name="playersCount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button onClick={runGame}>Take the shot!</button>
      </div>
      {players.length > 0 ? <GameTable players={players} /> : <div></div>}
    </div>
  );
}
