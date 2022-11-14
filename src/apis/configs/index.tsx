import axios from "axios";
import { ApiEndpoints } from "../../constants/app.const";

export default axios.create({
    baseURL: ApiEndpoints.baseURL
})