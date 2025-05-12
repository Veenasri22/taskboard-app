// App.js
import React, { useState } from "react";
import Board from "./components/Board";
import "./App.css";

function App() {
  const [columns, setColumns] = useState([
    { id: "todo", name: "To Do", tasks: [] },
    { id: "inprogress", name: "In Progress", tasks: [] },
    { id: "done", name: "Done", tasks: [] }
  ]);

  const addTask = (columnId, content) => {
    const newTask = { id: Date.now(), content };
    const updated = columns.map(col =>
      col.id === columnId
        ? { ...col, tasks: [...col.tasks, newTask] }
        : col
    );
    setColumns(updated);
  };

  return (
    <div className="App">
      <h1>Task Management Board</h1>
      <Board columns={columns} addTask={addTask} />
    </div>
  );
}

export default App;
