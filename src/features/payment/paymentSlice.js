import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isValid: false
};

const paymentSlice = createSlice({
    name: 'payment',
    initialState,
    reducers: {
        setValid: (state) =>{
            state.isValid = true;
        },
        unSetValid: (state) =>{
            state.isValid = false;
        }
    },
});

export default paymentSlice.reducer;
export const { setValid, unSetValid } = paymentSlice.actions;
