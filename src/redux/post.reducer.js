import {LOAD_POSTS} from "./action.types";

export const postReducer = (state = [], action) => {
    switch (action.type) {
        case LOAD_POSTS:
            return [...action.payload]
        default:
            return state
    }
}