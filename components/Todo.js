import React, { useState } from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import styles from './Todo.css'
function Todo({ todos, completeTodo }) {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    return todos.map((todo, index) => (
        <span class="child badge bg-success"> {todo.label}</span>
    ));
}

export default Todo
