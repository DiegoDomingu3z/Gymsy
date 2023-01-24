import axios from "axios"
const newUrl = 'http://localhost:4000/'

export const api = axios.create({
    baseURL: newUrl,
    timeout: 30000
})