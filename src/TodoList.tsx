import React, {useState} from 'react';
import {FilterType} from './App';

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    handleDelete: (id: number) => void
}

export function Todolist(props: PropsType) {
    const [filter, setFilter] = useState<FilterType>('all');

    let todoListTasks = props.tasks;

    if (filter === 'active') {
        todoListTasks = props.tasks.filter(item => !item.isDone)
    }
    if (filter === 'completed') {
        todoListTasks = props.tasks.filter(item => item.isDone)
    }

    const handleFilter = (value: FilterType) => {
        setFilter(value)
    }


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {todoListTasks.map((task) => {
                return <li key={task.id}><input type="checkbox" checked={task.isDone}/>
                    <span>{task.title}</span>
                    <button onClick={() => props.handleDelete(task.id)}>✖️</button>
                </li>
            })}
        </ul>
        <div>
            <button onClick={() => handleFilter('all')}>All</button>
            <button onClick={() => handleFilter('active')}>Active</button>
            <button onClick={() => handleFilter('completed')}>Completed</button>
        </div>
    </div>
}
