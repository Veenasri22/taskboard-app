// components/Board.js
import React from "react";
import Column from "./Column";

function Board({ columns, addTask }) {
  return (
    <div className="board">
      {columns.map(col => (
        <Column key={col.id} column={col} addTask={addTask} />
      ))}
    </div>
  );
}

export default Board;
