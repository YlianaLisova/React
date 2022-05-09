import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {todoAction} from "../../redux";


export const AddTodo = () => {
    const dispatch = useDispatch();
    const inputTodo = useRef();

    const addToDo = () => {
        dispatch(todoAction.addTodo({todo: inputTodo.current.value}));
        inputTodo.current.value = ''
    }

    return (
        <div>
            <input type="text" ref={inputTodo} placeholder={'Write your todo'}/>
            <button onClick={addToDo}>Add</button>
        </div>
    );
};

