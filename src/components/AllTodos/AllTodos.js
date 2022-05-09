import React from 'react';
import {useSelector} from "react-redux";
import {OneTodo} from "../OneTodo/OneTodo";

export const AllTodos = () => {
    const {todos} = useSelector(state => state.todo);
    return (
        <div>
            {todos.map(todo=> <OneTodo key={todo.id} todo={todo}/>)}
        </div>
    );
};

