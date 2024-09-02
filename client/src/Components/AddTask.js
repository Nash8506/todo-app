import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import '../App.css';

const AddTask = ({ onTaskAdded }) => {
    const [title, setTitle] = useState('');

    const addTask = () => {
        axios.post('http://localhost:5000/tasks', { title })
            .then(response => {
                onTaskAdded(response.data);
                setTitle(''); // Clear input after adding
            })
            .catch(error => console.error('Error adding task:', error));
    };

    return (
        <div className="add-task-container">
            <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Enter task" 
            />
            <button onClick={addTask}>Add Task</button>
        </div>
    );
};

AddTask.propTypes = {
    onTaskAdded: PropTypes.func.isRequired,
};

export default AddTask;
