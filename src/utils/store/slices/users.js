import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const getUsers = createAsyncThunk(
    'posts/getPosts', async () => {

        return fetch("https://jsonplaceholder.typicode.com/users").then((res) => res.json())
    }
)

const usersSlice = createSlice({
    name: 'users',
    initialState: {
        list: [],
        status: null,
    },
    extraReducers: {
        [getUsers.pending]: (state, action) => {
            state.status = 'loading'
        },
        [getUsers.fulfilled]: (state, { payload }) => {
            state.list = payload
            state.status = 'success'
        },
        [getUsers.rejected]: (state, action) => {
            state.status = 'failed'
        },
    },
})

export default usersSlice.reducer