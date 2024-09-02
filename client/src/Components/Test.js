import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Test = () => {
    const [tasks, setTasks] = useState([]);
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [updateTaskTitle, setUpdateTaskTitle] = useState('');
    const [taskIdToUpdate, setTaskIdToUpdate] = useState('');
    const [taskIdToDelete, setTaskIdToDelete] = useState('');

    // Fetch all tasks
    useEffect(() => {
        axios.get('http://localhost:5000/tasks')
            .then(response => setTasks(response.data))
            .catch(error => console.error('Error fetching tasks:', error));
    }, []);

    // Add a new task
    const addTask = () => {
        axios.post('http://localhost:5000/tasks', { title: newTaskTitle })
            .then(response => {
                console.log('Task added:', response.data);
                setTasks([...tasks, response.data]); // Update the task list
                setNewTaskTitle(''); // Clear the input field
            })
            .catch(error => console.error('Error adding task:', error));
    };

    // Update a task
    const updateTask = () => {
        axios.put(`http://localhost:5000/tasks/${taskIdToUpdate}`, { title: updateTaskTitle })
            .then(response => {
                console.log('Task updated:', response.data);
                setTasks(tasks.map(task => 
                    task._id === taskIdToUpdate ? response.data : task
                )); // Update the task list
                setUpdateTaskTitle(''); // Clear the input field
                setTaskIdToUpdate(''); // Clear the task ID field
            })
            .catch(error => console.error('Error updating task:', error));
    };

    // Delete a task
    const deleteTask = () => {
        axios.delete(`http://localhost:5000/tasks/${taskIdToDelete}`)
            .then(response => {
                console.log('Task deleted:', response.data);
                setTasks(tasks.filter(task => task._id !== taskIdToDelete)); // Update the task list
                setTaskIdToDelete(''); // Clear the task ID field
            })
            .catch(error => console.error('Error deleting task:', error));
    };

    return (
        <div>
            <h1>Task Management</h1>
            <h2>Tasks</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task._id}>{task.title}</li>
                ))}
            </ul>

            <h2>Add Task</h2>
            <input 
                type="text" 
                value={newTaskTitle} 
                onChange={(e) => setNewTaskTitle(e.target.value)} 
                placeholder="Enter task title" 
            />
            <button onClick={addTask}>Add Task</button>

            <h2>Update Task</h2>
            <input 
                type="text" 
                value={taskIdToUpdate} 
                onChange={(e) => setTaskIdToUpdate(e.target.value)} 
                placeholder="Enter task ID" 
            />
            <input 
                type="text" 
                value={updateTaskTitle} 
                onChange={(e) => setUpdateTaskTitle(e.target.value)} 
                placeholder="Update task title" 
            />
            <button onClick={updateTask}>Update Task</button>

            <h2>Delete Task</h2>
            <input 
                type="text" 
                value={taskIdToDelete} 
                onChange={(e) => setTaskIdToDelete(e.target.value)} 
                placeholder="Enter task ID" 
            />
            <button onClick={deleteTask}>Delete Task</button>
        </div>
    );
};

export default Test;
