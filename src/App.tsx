import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';

export type FilterType = 'all' | 'completed' | 'active';

function App() {
    let [tasks, setTasks] = useState([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'JS', isDone: true},
        {id: 3, title: 'ReactJS', isDone: false},
        {id: 4, title: 'Rest API', isDone: false},
        {id: 5, title: 'GraphQL', isDone: false},
    ]);
    const [filter, setFilter] = useState<FilterType>('all');

    let todoListTasks = tasks;

    if (filter === 'active') {
        todoListTasks = tasks.filter(item => !item.isDone)
    }
    if (filter === 'completed') {
        todoListTasks = tasks.filter(item => item.isDone)
    }

    const handleFilter = (value: FilterType) => {
        setFilter(value)
    }

    const handleDelete = (id: number) => setTasks(prevState => prevState.filter(task => task.id !== id))

    return (
        <div className="App">
            <Todolist title="What to learn" tasks={todoListTasks} handleDelete={handleDelete}
                      handleFilter={handleFilter}
            />
        </div>
    );
}

export default App;
