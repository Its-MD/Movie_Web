import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
    name: "changeTheme",
    initialState: null,
    reducers: {
        light: (state, action)=>{
            console.log(state)
            console.log(action)
            return "123"
        },
        dark: (state, action)=>{
            console.log(state)
            console.log(action)
            return "321"
        }
    }
})
export const themeReducer = themeSlice.reducer