import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const UpdateTask = ({ taskId, onTaskUpdated }) => {
    const [title, setTitle] = useState('');

    const updateTask = () => {
        axios.put(`http://localhost:5000/tasks/${taskId}`, { title })
            .then(response => {
                onTaskUpdated(response.data);
                setTitle(''); // Clear input after updating
            })
            .catch(error => console.error('Error updating task:', error));
    };

    return (
        <div>
            <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Enter new task title" 
            />
            <button onClick={updateTask}>Update Task</button>
        </div>
    );
};

UpdateTask.propTypes = {
    taskId: PropTypes.string.isRequired,
    onTaskUpdated: PropTypes.func.isRequired,
};

export default UpdateTask;
