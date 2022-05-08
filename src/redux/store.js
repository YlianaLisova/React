import {combineReducers, configureStore} from "@reduxjs/toolkit";
import todoReducer from "./slice/todo.slice";

const rootReducer = combineReducers({
    todo: todoReducer
});

export const store = configureStore({
    reducer: rootReducer
});