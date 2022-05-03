import React from "react";
import { resetStyle } from "../Styles";


const Reset = ({ reset }) => {
  return (
    <div style={resetStyle}>
      <button  style={{color: '#001D6E'}} onClick={reset}>Reset Game</button>
    </div>
  );
};

export default Reset;
