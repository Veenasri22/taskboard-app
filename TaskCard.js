// components/TaskCard.js
import React from "react";

function TaskCard({ task }) {
  return <div className="task-card">{task.content}</div>;
}

export default TaskCard;
