import {constants} from "../constants";

export const usersService = {
    getAllUsers: () => {
        return fetch(constants.apiUrl + 'users').then(value => value.json())
    }
}