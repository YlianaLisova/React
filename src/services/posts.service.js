import {constants} from "../constants";

export const postsService = {
    getAllPosts: () => {
        return fetch(constants.apiUrl + 'posts').then(value => value.json())
    }
}