import axios from "axios"
import { useSelector } from "react-redux"
const newUrl = 'http://192.168.1.155:4000/'
const laptopUrl = 'http://localhost:4000'



export const api = axios.create({
    baseURL: laptopUrl,
    headers: {
        "Authorization": '229X979WQ3I5DTG9474W2QZLDJ0P5B'
    },
    timeout: 30000
})