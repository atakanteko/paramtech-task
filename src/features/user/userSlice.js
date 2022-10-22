import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
    getUserFromLocalStorage,
    addUserToLocalStorage,
    removeUserFromLocalStorage,
} from '../../utils/localStorage';

import { signup } from "../../client/user";

const initialState = {
    user: getUserFromLocalStorage(),
    isLoading: false,
};

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (user, thunkAPI) => {
        try {
            const resp = await signup(user)
            if (resp.status === 201) {
                return user;
            }
        } catch (error){
            return thunkAPI.rejectWithValue(error.response.data.msg);
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserInformation: (state, action) => {
            const user = { ...action.payload };
            state.user = user;
            addUserToLocalStorage(user);
        },
        logoutUser: (state, action) => {
            state.user = null;
            removeUserFromLocalStorage();
        },
    },
    extraReducers:{
        [loginUser.pending]: (state) => {
            state.isLoading = true;
        },
        [loginUser.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.user = payload;
            addUserToLocalStorage(payload);
        },
        [loginUser.rejected]: (state) => {
            state.isLoading = false;
        },
    }
});

export default userSlice.reducer;
export const { setUserInformation, logoutUser } = userSlice.actions;
