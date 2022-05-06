import {axiosService} from "./axios.service";

import {urls} from "../constants";

export const userService = {
    create:(user)=> axiosService.post(urls.users, user)
}