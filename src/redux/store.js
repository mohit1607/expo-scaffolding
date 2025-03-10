import { configureStore } from "@reduxjs/toolkit"
import dummySlice from './dummySlice'
// this is central storage file for redux where we will register all the slices

const store = configureStore({
    reducer: {
        dummy: dummySlice,
        // ALL OTHER SLICES WILL BE ADDED HERE FOLLOWING...
    }
})

export default store;