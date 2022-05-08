import React, {useRef} from 'react';
import {useDispatch} from "react-redux";
import {todoAction} from "../../redux";


export const AddTodo = () => {
    const dispatch = useDispatch();
    const input = useRef();

    const addToDo = () => {
        dispatch(todoAction.add({todo: input.current.value}));
        input.current.value = ''
    }

    return (
        <div>
            <input type="text" ref={input} placeholder={'Write your todo'}/>
            <button onClick={addToDo}>Add</button>
        </div>
    );
};

