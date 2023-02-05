import axios from "axios"
import { useSelector } from "react-redux"
import AsyncStorage from '@react-native-async-storage/async-storage';
const newUrl = 'http://192.168.0.134:4000/'
const laptopUrl = 'http://localhost:4000'
const boiseUrl = 'http://192.168.1.155:4000/'



export const api = axios.create({
    baseURL: boiseUrl,
    timeout: 30000
})