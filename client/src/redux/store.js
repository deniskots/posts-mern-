import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./slices/auth";
import {postsReducer} from "./slices/post";


const store = configureStore({
    reducer: {
        auth: authReducer,
        post: postsReducer
    }
})

export default store;