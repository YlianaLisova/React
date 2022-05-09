import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    todos: [],
    todoForUpdate: null
};

const todoSlice = createSlice({
    name: 'todoSlice',
    initialState,
    reducers: {
        addTodos: (state, action) => {
            const {todo} = action.payload;
            const newTodo = {id: new Date().getTime(), title: todo}
            state.todos.push(newTodo);
        },
        deleteTodo: (state, action) => {
            const index = state.todos.findIndex(todo => todo.id === action.payload.id)
            state.todos.splice(index, 1)
        },
        setTodoForUpdate: (state, action) => {
            state.todoForUpdate= action.payload.todo

        },
        updateTodo: (state, action) => {
            const {id, updateTitle} = action.payload;
            const index = state.todos.findIndex(todo => todo.id === id)
            state.todos[index].title = updateTitle;
            state.todoForUpdate = false

        }
    }
});

const {reducer: todoReducer, actions: {addTodos, deleteTodo, setTodoForUpdate, updateTodo}} = todoSlice;
export default todoReducer;
export const todoAction = {
    addTodos,
    deleteTodo,
    setTodoForUpdate,
    updateTodo
}