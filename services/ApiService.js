import axios from "axios"
const newUrl = 'http://localhost:4000/'

export const api = axios.create({
    baseURL: newUrl,
    responseType: 'json',
    withCredentials: true,
    timeout: 30000
})