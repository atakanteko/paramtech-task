import { configureStore } from '@reduxjs/toolkit';

import userSlice from './features/user/userSlice';
import packageSlice from "./features/package/packageSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        package: packageSlice,
    },
});
