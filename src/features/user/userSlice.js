import { createSlice } from '@reduxjs/toolkit';
import {
    getUserFromLocalStorage,
    addUserToLocalStorage,
    removeUserFromLocalStorage,
} from '../../utils/localStorage';

const initialState = {
    user: getUserFromLocalStorage(),
    isLoading: false,
};

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
});

export default userSlice.reducer;
export const { setUserInformation, logoutUser } = userSlice.actions;
