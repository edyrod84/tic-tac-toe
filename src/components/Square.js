import React from "react";
import { squareStyle } from "../Styles";

const Square = ({ onClick, value }) => (
  <button style={squareStyle} onClick={onClick}>{value}</button>
);
export default Square;
