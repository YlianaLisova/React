import axios from "axios";

import {baseURL} from "../constants";

export let axiosService = axios.create({baseURL});