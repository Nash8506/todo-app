import React from 'react';
import './TodoItem.css';

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <div className="todo-item">
      <div
        className={`todo-task ${todo.completed ? 'completed' : ''}`}
        onClick={() => toggleComplete(todo.id)}
      >
        <div>{todo.task}</div>
        <small className="todo-timestamp">{todo.timestamp}</small>
      </div>
      <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: '10px' }}>Delete</button>
    </div>
  );
}

export default TodoItem;
