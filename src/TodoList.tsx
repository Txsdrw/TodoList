import React, {MouseEventHandler} from 'react';
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
    handleFilter: (value: FilterType) => void
}

export function Todolist(props: PropsType) {


    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {props.tasks.map((task) => {
                return <li key={task.id}><input type="checkbox" checked={task.isDone}/>
                    <span>{task.title}</span>
                    <button onClick={() => props.handleDelete(task.id)}>✖️</button>
                </li>
            })}
        </ul>
        <div>
            <button onClick={() => props.handleFilter('all')}>All</button>
            <button onClick={() => props.handleFilter('active')}>Active</button>
            <button onClick={() => props.handleFilter('completed')}>Completed</button>
        </div>
    </div>
}
