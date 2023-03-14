import axios from "axios"
import { useSelector } from "react-redux"
import AsyncStorage from '@react-native-async-storage/async-storage';
const newUrl = 'http://127.0.0.1:4000/'
const laptopUrl = 'http://localhost:4000'
const boiseUrl = 'http://192.168.1.158:4000/'



export const api = axios.create({
    baseURL: boiseUrl,
    timeout: 30000
})