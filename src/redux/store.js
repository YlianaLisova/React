import {combineReducers, createStore} from "redux";
import {userReducer} from "./user.reducer";
import {postReducer} from "./post.reducer";

const reducers = combineReducers({userState: userReducer, postState: postReducer});
export const store = createStore(reducers)