import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

export type FilterType = 'all' | 'completed' | 'active';

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

function App() {
    let [tasks, setTasks] = useState([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'Rest API', isDone: false},
        {id: 5, title: 'GraphQL', isDone: false},
    ]);

    const handleChange = (id: number) => {
        setTasks(tasks.map(task => task.id === id ? {...task, isDone: !task.isDone} : task
        ))
    }


    const handleDelete = (id: number) => setTasks(prevState => prevState.filter(task => task.id !== id))

    return (
        <div className="App">
            <Todolist title="What to learn" tasks={tasks} handleDelete={handleDelete} handleChange={handleChange}
            />
        </div>
    );
}

export default App;
