import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        isAuth: false,
        email: null,
        token: null,
        uid: null
    },
    reducers: {
        addUser: ()=>{

        },
        removeUser: ()=>{
            
        }
    }
})