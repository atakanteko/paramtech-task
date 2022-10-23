import { configureStore } from '@reduxjs/toolkit';

import userSlice from './features/user/userSlice';
import packageSlice from "./features/package/packageSlice";
import paymentSlice from "./features/payment/paymentSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        package: packageSlice,
        payment: paymentSlice,
    },
});
