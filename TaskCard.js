import React from 'react';

export default function TaskCard({ task, onDelete, onMove, allColumns, currentColumn }) {
  return (
    <div style={{ border: '1px solid black', margin: '0.5rem 0', padding: '0.5rem' }}>
      <p>{task}</p>
      <button onClick={onDelete}>Delete</button>
      <div>
        {allColumns
          .filter(col => col !== currentColumn)
          .map(col => (
            <button key={col} onClick={() => onMove(col)}>
              Move to {col}
            </button>
          ))}
      </div>
    </div>
  );
}
