import React, { useState } from 'react'
import { BsFillXCircleFill } from "react-icons/bs";
import TodoStyle from './Todo.css'

function Todo({ todos, completeTodo, removeTodo }) {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    return todos.map((todo, index) => (
        <>
            <span class="child badge bg-success" > {todo.label}
                <BsFillXCircleFill style={{ marginLeft: '10px' }}
                    onClick={() => removeTodo(todo.id)}>
                </BsFillXCircleFill>
            </span>
        </>

    ));
}

export default Todo
