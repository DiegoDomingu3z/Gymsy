import axios from "axios"
import { useSelector } from "react-redux"
const newUrl = 'http://192.168.1.155:4000/'
const laptopUrl = 'http://localhost:4000'



export const api = axios.create({
    baseURL: laptopUrl,
    timeout: 30000
})