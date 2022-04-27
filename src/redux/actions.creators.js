import {LOAD_POSTS, LOAD_USERS} from "./action.types";

export const loadUsers = (payload) => {
    return {type: LOAD_USERS, payload}
}
export const loadPosts = (payload) => {
    return {type: LOAD_POSTS, payload}
}