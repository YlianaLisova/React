import {applyMiddleware, combineReducers, createStore} from "redux";
import {reducerUsers} from "./user.reducer";
import {reducerPosts} from "./post.reducer";
import thunk from "redux-thunk";

const reducers = combineReducers({postsState: reducerPosts, usersState: reducerUsers});


export const store = createStore(reducers, applyMiddleware(thunk));
