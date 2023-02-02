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


export const AccountSlice = createSlice({
    name: 'account',
    initialState: {
        activeAccount: {},
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


    }
})

export default AccountSlice.reducer;