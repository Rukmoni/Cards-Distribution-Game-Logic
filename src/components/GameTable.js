import React from 'react';


const GameTable = ({players}) => {

    const listItems = players.map((player) =>
    <li key={player.toString()}>
      {player.name}=> {player.cardString}
    </li>
  );
  
  
    return (
        <div style={{marginTop:10}}><ul>{listItems}</ul></div>);
}
 
export default GameTable;