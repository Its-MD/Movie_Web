import { configureStore } from '@reduxjs/toolkit'
import { idReducer } from './idSlice'
import { themeReducer } from './themeSlice'
import { userReducer } from './userSlice'
import { loadingReducer } from './loadingSlice'
//store is a class which provides access to global redux store
//store contains some fields and methods for example, getState - this method returns all states
export const store = configureStore({
    //reducer is a field which contains all states contructed with simple little states
    reducer: {
        id: idReducer,
        theme: themeReducer,
        user: userReducer,
        loading: loadingReducer
    }
})