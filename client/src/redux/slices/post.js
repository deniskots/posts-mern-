import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const createPosts = createAsyncThunk('post/fetchPosts',async (params) => {
    const {data} = await axios.post('/posts', params);
    return data
})

export const fetchPosts = createAsyncThunk('post/fetchPosts',async () => {
    const {data} = await axios.get('/posts');
    return data
})

export const fetchRemovePosts = createAsyncThunk('post/fetchRemovePosts',async (id) => {
    const {data} = await axios.delete(`/posts/${id}`);
    return data
})

const initialState = {
    posts: [],
    popularPosts: [],
    loading: false
};

const postsSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: {
        //создание постов
        [createPosts.pending]: (state) => {
            state.posts = []
            state.loading = true
        },
        [createPosts.fulfilled]: (state, action) => {
            state.posts.push(action.payload)
            state.loading = false
        },
        [createPosts.rejected]: (state) => {
            state.posts = []
            state.loading = false
        },
        [fetchPosts.pending]: (state) => {
            state.loading = true
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.posts = action.payload.posts
            state.postsPopular = action.payload.postsPopular
            state.loading = false
        },
        [fetchPosts.rejected]: (state) => {
            state.posts = []
            state.loading = false
        },
        //удаление постов
        [fetchRemovePosts.pending]: (state) => {
            state.loading = true
        },
        [fetchRemovePosts.fulfilled]: (state, action) => {
            state.posts = state.posts.filter((post) => post._id !== action.payload._id)
        },
        [fetchRemovePosts.rejected]: (state) => {
            state.loading = false
        }
    }
})


export const postsReducer = postsSlice.reducer;