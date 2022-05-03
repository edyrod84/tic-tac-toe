import React from "react";
import { historyStyle } from "../Styles";


const History = ({ properties }) => {

  const { winner, next, history, jump } = properties;

  const renderMoves = () => {
    return history.map((_step, move) => {
      const destination = move ? `Go to move: ${move}` : "Go to Start";
      return (
        <li key={move}>
          <button  style={{color: '#001D6E'}} onClick={() => jump(move)}>{destination}</button>
        </li>
      );
    });
  };

  return (
    <div style={historyStyle}>
      <p style={{marginTop: 0}}>
        {winner ? "Winner: " + winner : "Next Player: " + (next ? "X" : "O")}
      </p>
      {renderMoves()}
    </div>
  );
};

export default History;
