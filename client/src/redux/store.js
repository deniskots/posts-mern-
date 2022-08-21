import {configureStore} from "@reduxjs/toolkit";
import {authReducer} from "./slices/auth";
import {postsReducer} from "./slices/post";
import {commentsReducer} from "./slices/comment";


const store = configureStore({
    reducer: {
        auth: authReducer,
        post: postsReducer,
        comment: commentsReducer,
    }
})

export default store;