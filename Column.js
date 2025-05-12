// components/Column.js
import React, { useState } from "react";
import TaskCard from "./TaskCard";

function Column({ column, addTask }) {
  const [taskText, setTaskText] = useState("");

  const handleAdd = () => {
    if (taskText.trim() === "") return;
    addTask(column.id, taskText);
    setTaskText("");
  };

  return (
    <div className="column">
      <h2>{column.name}</h2>
      {column.tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
      <input
        value={taskText}
        onChange={e => setTaskText(e.target.value)}
        placeholder="New task..."
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default Column;
