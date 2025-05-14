"use client";
import React, { useState, useEffect } from 'react';
import Column from './Column';

const defaultColumns = {
  'To Do': [],
  'In Progress': [],
  'Done': []
};

export default function Board() {
  const [columns, setColumns] = useState(defaultColumns);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('board');
      if (stored) {
        setColumns(JSON.parse(stored));
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('board', JSON.stringify(columns));
    }
  }, [columns]);

  const addTask = (column, task) => {
    setColumns(prev => ({
      ...prev,
      [column]: [...prev[column], task]
    }));
  };

  const moveTask = (fromCol, toCol, index) => {
    const task = columns[fromCol][index];
    setColumns(prev => {
      const updatedFrom = [...prev[fromCol]];
      updatedFrom.splice(index, 1);
      const updatedTo = [...prev[toCol], task];
      return { ...prev, [fromCol]: updatedFrom, [toCol]: updatedTo };
    });
  };

  const deleteTask = (col, index) => {
    setColumns(prev => {
      const updated = [...prev[col]];
      updated.splice(index, 1);
      return { ...prev, [col]: updated };
    });
  };

  return (
    <div style={{ display: 'flex', gap: '1rem' }}>
      {Object.keys(columns).map(col => (
        <Column
          key={col}
          name={col}
          tasks={columns[col]}
          addTask={addTask}
          moveTask={moveTask}
          deleteTask={deleteTask}
          allColumns={Object.keys(columns)}
        />
      ))}
    </div>
  );
}
