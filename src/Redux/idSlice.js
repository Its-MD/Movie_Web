import { createSlice } from "@reduxjs/toolkit";
//slice is a function which creates initial state and functions which can change that state
//these functions called reducer
const idSlice = createSlice({
    name: "idName",
    initialState: "1",
    //this field contains reducers functions
    //reducer its simple function which gets 2 params (state and action) and return new state, it is necessary.
    reducers: {
        passId: (state, action)=>{
            return state = action.payload
        }
    }
})
export const idReducer = idSlice.reducer
export const passId = idSlice.actions.passId