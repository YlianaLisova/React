import {LOAD_USERS} from "./action.types";

export const loadUsersData = (payload) => {
    return {type: LOAD_USERS, payload}
}