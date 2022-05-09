import React, {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {todoAction} from "../../redux";

export const Todos = () => {
    const {todoForUpdate} = useSelector(state => state.todo);
    const todoInput = useRef();
    const dispatch = useDispatch();

    const addTodo = () => {
        if (todoForUpdate) {
            const newTodoUpdate = todoInput.current.value;
            dispatch(todoAction.updateTodo({id: todoForUpdate.id, updateTitle: newTodoUpdate}))
        } else {
            const newTodoUpdate = todoInput.current.value;
            dispatch(todoAction.addTodos({todo:newTodoUpdate}));
        }
        todoInput.current.value = ''
    }

    useEffect(() => {
        if (todoForUpdate) {
            todoInput.current.value = todoForUpdate.title
        }
    }, [todoForUpdate])


    return (
        <div>
            <input type="text" placeholder={'todo'} ref={todoInput}/>
            <button style={{cursor:'pointer'}} onClick={addTodo}>Add</button>
            <hr style={{background:'beige'}}/>
        </div>
    );
};


