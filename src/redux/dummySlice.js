import { createSlice } from '@reduxjs/toolkit';

// this is how we will be creating the other slices too
const dummySlice = createSlice({
    name: 'dummy',
    initialState: 'iniital state', // initial state be an empty array
    reducers: {
        addDummy: (state, action) => {
            // state.push(action.payload)
            state = action.payload  
            // we are mutating the state directly here for example but it can be dangerouse so save previous state and 
            // then only return the  
            return state
        }  // a dummy fucntions that will add the payload to the state
        // we will be making functions similar to this one
    }
})

export const {addDummy} = dummySlice.actions; // this is where we will 
// be exporting the functions that we will be using in the components
export default dummySlice.reducer;  
// this is wherer all the reducers will be combined and exported to the store

