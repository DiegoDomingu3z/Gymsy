import { configureStore } from '@reduxjs/toolkit'
import accountReducer from './Account'
import locationReducer from './location'
import gymReducer from './Gyms'



// for every file or collection that you are going to manipulate
// create a new reducer
export const store = configureStore({
    reducer: {
        account: accountReducer,
        location: locationReducer,
        gym: gymReducer
    }
})