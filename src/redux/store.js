import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {authReducer, carReducer} from "./slices";

const rootReducer = combineReducers({
    auth: authReducer,
    car: carReducer
});
export const store = configureStore({
    reducer: rootReducer
});