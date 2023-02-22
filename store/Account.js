import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { useSelector } from "react-redux";
import { api } from "../services/ApiService";
import AsyncStorage from '@react-native-async-storage/async-storage';



export const createAccount = createAsyncThunk(
    'account/createAccount',
    async (userData) => {
        try {
            const res = await api.post('account', userData)
                .then(res => res.data)
                console.log(res)
            return res
        } catch (error) {
            throw error
        }
    }
)

export const logInAccount = createAsyncThunk(
    'account/login',
    async (userData, { dispatch }) => {
        try {
            const res = await api.post('account/login', userData)
                .then(res => res.data)
            console.log(res, "Its working")
            return res
        } catch (error) {
           throw error
        }

    }
)

export const getAccount = createAsyncThunk(
    'account/getaccount',
    async (authToken) => {
        try {
            const res = await api.get('account/myaccount', {
                headers: {
                    Authorization: `${authToken}`
                }
            })
                .then((res) => res.data)
                console.log(res, 'this the data')
                return res
        } catch (error) {
            // console.log({successful: false})
            throw error
        }
    }
)

export const logout = createAsyncThunk(
    'account/logout',
    async (authToken) => {
        try {
            const res = await api.delete('account/session', {
                headers: {
                    Authorization: `${authToken}`
                }
            })
            .then((res) => res.data)
            return res
        } catch (error) {
            return error
        }
    }
)


export const AccountSlice = createSlice({
    name: 'account',
    initialState: {
        account: {},
        loading: false,
        authToken: '',
        request: false,
        errorCode: '',
        errorMessage: '',
        logoutCode: '',
        loginCode: ''
    },
    reducers: {


    },

    extraReducers: (builder) => {
        builder
            //////////// SECTION - ADDING ACCOUNT //////////// 
            .addCase(createAccount.pending, (state) => {
                state.loading = true
            })
            .addCase(createAccount.fulfilled, (state, action) => {
                state.loading = false
            })
            .addCase(createAccount.rejected, (state, error) => {
                state.loading = true
                console.log(error)
            })
            .addCase(logInAccount.pending, (state) => {
                state.loading = true
            })
            .addCase(logInAccount.fulfilled, (state, action) => {
                state.loading = false
                state.authToken = action.payload
            })
            .addCase(logInAccount.rejected, (state, action) => {
                state.loading = true
                state.loginCode = action.error.code
                state.errorMessage = action.error.message
            })
            .addCase(getAccount.pending, (state) => {
                state.loading = true
            })
            .addCase(getAccount.fulfilled, (state, action) => {
                state.loading = false
                console.log(action, "THIS THE ACTION")
                state.account = action.payload
                state.request = true
            })
            .addCase(getAccount.rejected, (state, action) => {
                state.loading = true
                state.request = false
                state.errorCode = action.error.code
                state.errorMessage = action.error.message
            })
            .addCase(logout.pending, (state) => {
                state.loading = true
            })
            .addCase(logout.fulfilled, (state, action) => {
                state.loading = false
                console.log(action, "THIS THE ACTION")
                state.account = action.payload
                state.request = true
            })
            .addCase(logout.rejected, (state, action) => {
                state.loading = true
                state.logoutCode = action.error.code
                state.errorMessage = action.error.message
            })


    }
})

export default AccountSlice.reducer;