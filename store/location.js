import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../services/ApiService";



export const settingLocation = createAsyncThunk(
    'setUserLocation',
    async (userlocation) => {
    try {
        console.log(userlocation.toekn, "THIS THE FUCKING TOKEN")
        const res = await api.post('api/account/location', userlocation, {
            headers: {
            Authorization: `${userlocation.token}`
        }} )
        .then((res) => res.data)
        console.log(res, "this the res")
        return res
    } catch (error) {
        console.log(error, "did not connect")
        console.log(error.message)
        return error
    }
}


)



export const LocationSlice = createSlice({
    name: 'location',
    initialState: {
        location: {},
        loading: false,
        errorCode: '',
        errorMessage: '',
    },
    reducers: {
        

    },

    extraReducers: (builder) => {
        builder
            //////////// SECTION - ADDING ACCOUNT //////////// 
            .addCase(settingLocation.pending, (state) => {
                state.loading = true
            })
            .addCase(settingLocation.fulfilled, (state, action) => {
                state.loading = false
                state.location = action.payload
            })
            .addCase(settingLocation.rejected, (state, action) => {
                state.loading = true
                state.errorCode = action.error.code
                state.createAccountMessage = action.error.message
            })

    }
})


export default LocationSlice.reducer;