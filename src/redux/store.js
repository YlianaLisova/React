import {combineReducers, configureStore} from "@reduxjs/toolkit";
import catReducer from "./slice/cat.slice";
import dogReducer from "./slice/dog.slice";

const rootReducer = combineReducers({
    cat: catReducer,
    dog: dogReducer
});

export const store = configureStore({
    reducer: rootReducer
});