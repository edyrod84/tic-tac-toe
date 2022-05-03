import React from "react";
import Square from "./Square";
import { boardStyle } from "../Styles";

const Board = ({ squares, onClick }) => (
  <div style={boardStyle}>
    {squares.map((sq, i) => (
      <Square key={i} value={sq} onClick={() => onClick(i)} />
    ))}
  </div>
);

export default Board;
