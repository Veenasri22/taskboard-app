import React, { useState } from 'react';
import TaskCard from './TaskCard';

export default function Column({ name, tasks, addTask, moveTask, deleteTask, allColumns }) {
  const [newTask, setNewTask] = useState('');

  const handleAdd = () => {
    if (newTask.trim()) {
      addTask(name, newTask.trim());
      setNewTask('');
    }
  };

  return (
    <div style={{ padding: '1rem', border: '1px solid gray', width: '250px' }}>
      <h3>{name}</h3>
      <input
        type="text"
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
        placeholder="New task"
      />
      <button onClick={handleAdd}>Add</button>
      {tasks.map((task, index) => (
        <TaskCard
          key={index}
          task={task}
          onDelete={() => deleteTask(name, index)}
          onMove={(toCol) => moveTask(name, toCol, index)}
          allColumns={allColumns}
          currentColumn={name}
        />
      ))}
    </div>
  );
}
