import axios from "axios"
import { useSelector } from "react-redux"
import AsyncStorage from '@react-native-async-storage/async-storage';
const newUrl = 'http://172.20.10.4:4000'
const laptopUrl = 'http://localhost:4000'
const boiseUrl = 'http://192.168.1.158:4000/'
const server = '54.219.182.277:'


export const api = axios.create({
    baseURL: laptopUrl,
    timeout: 30000
})