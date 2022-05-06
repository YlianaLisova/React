import {axiosService} from "./axios.service";
import {urls} from "../constants";

export const carService = {
    getAll:()=> axiosService.get(urls.cars)
}