import { createSlice } from '@reduxjs/toolkit';

// debitCardInfo:{
//     name: '',
//         cardNumber: '',
//         expiration: '',
//         cvv: '',
// }
const initialState = {
    isValid: false,
    debitCardInfo:{}
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
        },
        setDebitCardInfo: (state, { payload }) =>{
            state.debitCardInfo = payload
        },
    },
});

export default paymentSlice.reducer;
export const { setValid, unSetValid, setDebitCardInfo } = paymentSlice.actions;
