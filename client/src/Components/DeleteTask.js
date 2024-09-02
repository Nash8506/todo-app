import React from 'react';
import axios from 'axios';

const DeleteTask = ({ taskId, onTaskDeleted }) => {
    const deleteTask = () => {
        axios.delete(`http://localhost:5000/tasks/${taskId}`)
            .then(() => {
                console.log(`Deleted task with ID: ${taskId}`);
                onTaskDeleted(taskId);
            })
            .catch(error => console.error('Error deleting task:', error));
    };

    return (
        <button onClick={deleteTask}>Delete Task</button>
    );
};


export default DeleteTask;
