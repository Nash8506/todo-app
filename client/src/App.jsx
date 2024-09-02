import React, { useState } from 'react';
import TaskList from './Components/TaskList';
// import AddTask from './Components/AddTask';
// import UpdateTask from './Components/UpdateTask';
// import DeleteTask from './Components/DeleteTask';

import './App.css';

const App = () => {
    const [tasks] = useState([]);


    return (
        <div>
            <h1>Todo App</h1>
            {/* <AddTask onTaskAdded={refreshTasks}/> */}
            <TaskList tasks={tasks}/>
            {/* <UpdateTask onTaskUpdated={refreshTasks} /> */}
            {/* <DeleteTask onTaskDeleted={refreshTasks} /> */}
        </div>
    );
};

export default App;
