import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../utils/axios";


export const createComments = createAsyncThunk('comment/createComments',async ({postId, comment}) => {
    const {data} = await axios.post(`/comments/${postId}`, {postId, comment});
    return data
})

export const fetchComments = createAsyncThunk('comment/fetchComments',async (postId) => {
    const {data} = await axios.get(`/posts/comments/${postId}`);
    return data
})


const initialState = {
    comments: [],
    loading: false
};

const commentsSlice = createSlice({
    name: 'comment',
    initialState,
    reducers: {},
    extraReducers: {
        //создание комента
        [createComments.pending]: (state) => {
            state.loading = true
        },
        [createComments.fulfilled]: (state, action) => {
            state.comments.push(action.payload)
            state.loading = false
        },
        [createComments.rejected]: (state) => {
            state.loading = false
        },
        //получение комента
        [fetchComments.pending]: (state) => {
            state.loading = true
        },
        [fetchComments.fulfilled]: (state, action) => {
            state.comments = action.payload
            state.loading = false
        },
        [fetchComments.rejected]: (state) => {
            state.loading = false
        }
    }
})




export const commentsReducer = commentsSlice.reducer;