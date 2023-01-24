import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../services/ApiService";


export const createAccount = createAsyncThunk(
    'account/createAccount',
    async (employeeData) => {
        try {
            const res = await api.post('account', employeeData)
                .then(res => res.data)
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
        loading: false
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

    }
})

export default AccountSlice.reducer;