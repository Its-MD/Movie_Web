import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
    name: "loading",
    initialState: {
        loading: false,
        error: false
    },
    reducers: {
        setLoading: (state, action)=>{
            return state = {
                loading: true,
                error: false
            }
        },
        removeLoading: (state, action)=>{
            return state = {
                loading: false,
                error: false
            }
        },
        setError: (state, action)=>{
            return state = {
                loading: false,
                error: true
            }
        }
    }
})
export const loadingReducer = loadingSlice.reducer
export const {setLoading, removeLoading, setError} = loadingSlice.actions