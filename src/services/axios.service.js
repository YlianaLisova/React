import axios from "axios";
import {baseURL} from "../constants";
import {authService} from "./auth.service";

export const axiosService = axios.create({baseURL});

let isRefreshing = false

axiosService.interceptors.request.use((config) => {
    const access = localStorage.getItem('access');
    config.headers.Authorization = `Bearer ${access}`
    return config
})

axiosService.interceptors.response.use(
    (config) => {
        return config
    },
    async (error) => {
        if (error.response?.status === 401 && error.config && !isRefreshing) {
            isRefreshing = true
            const refresh = localStorage.getItem('refresh');
            try {
                const {access, refresh} = await authService.refresh(refresh);
                localStorage.setItem('access', access);
                localStorage.setItem('refresh', refresh)
            } catch (e) {

            }

        }
    })