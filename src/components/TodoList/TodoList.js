import React from 'react';
import {useSelector} from "react-redux";
import {OneTodo} from "../OneTodo/OneTodo";

export const TodoList = () => {
    const {todoList} = useSelector(state => state.todo);
    return (
        <div>
            {todoList.map(item => <OneTodo key={item.id} item={item}/>)}
        </div>
    );
};


