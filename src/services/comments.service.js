import {constants} from "../constants";

export const commentsService = {
    getAllComments: () => {
        return fetch(constants.apiUrl + 'comments').then(value => value.json())
    }

}