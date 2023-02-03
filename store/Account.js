import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../services/ApiService";


export const createAccount = createAsyncThunk(
    'account/createAccount',
    async (userData) => {
        try {
            const res = await api.post('account', userData)
                .then(res => res.data)

            return res
        } catch (error) {
            return error.message
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
            return error.message
        }

    }
)

export const getAccount = createAsyncThunk(
    'account/getaccount',
    async (authToken) => {
        try {
            const head = {
                'Authorization': `${authToken}`,
            }
            const res = await api.get('account/myaccount', head)
                .then((res) => res.data)
            console.log(res.data)
        } catch (error) {
            return error.message
        }
    }
)


export const AccountSlice = createSlice({
    name: 'account',
    initialState: {
        account: {},
        loading: false,
        authToken: ''
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
            })
            .addCase(logInAccount.pending, (state) => {
                state.loading = true
            })
            .addCase(logInAccount.fulfilled, (state, action) => {
                state.loading = false
                state.authToken = action.payload
            })
            .addCase(logInAccount.rejected, (state, error) => {
                state.loading = true
            })
            .addCase(getAccount.pending, (state) => {
                state.loading = true
            })
            .addCase(getAccount.fulfilled, (state, action) => {
                state.loading = false
                state.account = action.payload
            })
            .addCase(getAccount.rejected, (state, error) => {
                state.loading = true
            })


    }
})

export default AccountSlice.reducer;