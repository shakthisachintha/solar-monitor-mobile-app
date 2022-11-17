import axios from "axios";
import { ApiEndpoints } from "../constants/app.const";

export const API = axios.create({
    baseURL: ApiEndpoints.baseURL
})
