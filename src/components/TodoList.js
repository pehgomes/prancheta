import React, { useState } from "react";
import Todo from "./Todo";
import ListaJogadores from "./ListaJogadores";


function TodoList({ height, nodes, onSubmit }) {

    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        if (todos.length == 11) return;

        const newTodos = [todo, ...todos]

        setTodos(newTodos);
    }

    const completeTodo = id => {
        let updateTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updateTodos)
    }

    return (
        <div>
            <ListaJogadores nodes={nodes} height={height} onSubmit={onSubmit} />
            <Todo todos={todos} completeTodo={completeTodo}></Todo>
        </div>
    );
}

export default TodoList;
// https://youtu.be/E1E08i2UJGI?t=1897 Todo list examples