import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DeleteTask from './DeleteTask'
import AddTask from './AddTask';

const TaskList = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/tasks')
            .then(response => setTasks(response.data))
            .catch(error => console.error('Error fetching tasks:', error));
    }, []);

   // Function to handle task addition
   const handleTaskAdded = (newTask) => {
    setTasks([...tasks, newTask]);  // Add the new task to the list
};

const handleTaskDeleted = (deletedTaskId) => {
    setTasks(tasks.filter(task => task._id !== deletedTaskId));
};

return (
    <div>
        <AddTask onTaskAdded={handleTaskAdded} />
        <ul>
            {tasks.map(task => (
                <li key={task._id}>
                    {task.title}
                    <DeleteTask taskId={task._id} onTaskDeleted={handleTaskDeleted} />
                </li>
            ))}
        </ul>
    </div>
);
};

export default TaskList;