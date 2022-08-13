import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../utils/axios";

export const fetchRegister = createAsyncThunk('auth/fetchRegister',async ({fullName, email, password}) => {
    const {data} = await axios.post('/auth/register', {fullName, email, password});
    return data
})
export const fetchLogin = createAsyncThunk('auth/fetchLogin',async ({ email, password}) => {
    const {data} = await axios.post('/auth/login', { email, password});
    return data
})

export const fetchAuthMe = createAsyncThunk('auth/fetchAuthMe', async () => {
    const {data} = await axios.get('/auth/me')
    return data
})

const initialState = {
    data: null,
    loading: false
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null
            localStorage.removeItem('token')
        }
    },
    extraReducers: {
        [fetchRegister.pending]: (state) => {
            state.data = null
            state.loading = true
        },
        [fetchRegister.fulfilled]: (state, action) => {
            state.data = action.payload
            state.loading = false
        },
        [fetchRegister.rejected]: (state, action) => {
            state.data = null
            state.loading = false
        },

        [fetchLogin.pending]: (state) => {
            state.data = null
            state.loading = true
        },
        [fetchLogin.fulfilled]: (state, action) => {
            state.data = action.payload
            state.loading = false
        },
        [fetchLogin.rejected]: (state, action) => {
            state.data = null
            state.loading = false
        },

        [fetchAuthMe.pending]: (state) => {
            state.data = null;
            state.loading = true
        },
        [fetchAuthMe.fulfilled]: (state, action) => {
            state.data = action.payload;
            state.loading = false
        },
        [fetchAuthMe.rejected]: (state) => {
            state.data = null;
            state.loading = false
        }
    }
})

export const selectIsAuth = (state) => Boolean(state.auth.data);
export const {logout} = authSlice.actions;
export const authReducer = authSlice.reducer;