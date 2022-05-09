import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    todoList: []
}

const todoSlice = createSlice({
        name: 'todoSlice',
        initialState,
        reducers: {
            addTodo: (state, action) => {
                const {todo} = action.payload;
                const newTodo = {id: new Date().getTime(), title: todo}
                state.todoList.push(newTodo);
            }
        }
    }
);

const {reducer: todoReducer, actions: {addTodo}} = todoSlice;
export default todoReducer

export const todoAction = {
    addTodo
}