import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
import { api } from "../services/ApiService";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getGymsAroundMe = createAsyncThunk(
    'account/getGymsAroundMe',
    async (token) => {
        try {
            console.log('Being called')
            const res = await api.get('/api/gym/around-me', {
                headers: {
                    Authorization: token
                }
            })
                .then(res => res.data)
            console.log(res)
            return res
        } catch (error) {
            console.log(error)
            throw error
        }
    }

)


export const GymSlice = createSlice({
    name: 'Gym',
    initialState: {
        loading: false,
        errorCode: '',
        errorMessage: '',
        gyms: []
    },
    reducers: {


    },

    extraReducers: (builder) => {
        builder
            .addCase(getGymsAroundMe.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getGymsAroundMe.fulfilled, (state, action) => {
                state.loading = false
                state.gyms = action.payload
                console.log(state.gyms, 'THIS THE STATE IN REDUX')
            })
            .addCase(getGymsAroundMe.rejected, (state, action) => {
                state.loading = true
                state.errorCode = action.error.code
            })

    }
})

export default GymSlice.reducer