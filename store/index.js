import { configureStore } from '@reduxjs/toolkit'
import accountReducer from './Account'


// for every file or collection that you are going to manipulate
// create a new reducer
export const store = configureStore({
    reducer: {
        account: accountReducer
    }
})