import React from 'react';
import PropTypes from 'prop-types'; // Import prop-types library
import TodoItem from './TodoItem';
import './TodoList.css';

function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <div>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}

TodoList.propTypes = { // Define prop types for TodoList component
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    toggleComplete: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired,
  };

export default TodoList;
