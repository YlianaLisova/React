import {LOAD_POSTS} from "./action.types";
import {loadUsersData} from "./action";

export const loadUsers = (users) => async (dispatch) =>{
    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());
    dispatch (loadUsersData(users))

}
// export const loadUsers = (payload, dispatch) => {
//     dispatch({type: LOAD_USERS, payload})
//
// }

export const loadPosts = (payload) => {
    return {type: LOAD_POSTS, payload}
}