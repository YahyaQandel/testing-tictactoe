import React from "react";
import Square from "./Square";

const Board = ({ squares, onClick }) => (
  <div>
    <h1>Board</h1>
    <div className="board">
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  </div>
);

export default Board;
