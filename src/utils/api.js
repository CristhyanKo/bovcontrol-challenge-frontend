import axios from "axios"
import config from "../config/appConfig"

const api = axios.create({ baseURL: config.apiBaseUrl })

export default api
