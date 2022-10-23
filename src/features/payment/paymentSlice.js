import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { payment } from "../../client/payment";

const initialState = {
    isValid: false,
    debitCardInfo:{},
    isLoading: false,
    paymentResp: '',
};

export const paymentThunk = createAsyncThunk(
    'payment/paymentThunk',
    async (model, thunkAPI) => {
        try {
            const resp = await payment(model)
            if (resp.status === 201) {
                return resp.data;
            }
        } catch (error){
            return thunkAPI.rejectWithValue(error);
        }
    }
);


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
    extraReducers:{
        [paymentThunk.pending]: (state) => {
            state.isLoading = true;
        },
        [paymentThunk.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.paymentResp = payload;
        },
        [paymentThunk.rejected]: (state) => {
            state.isLoading = false;
        },
    }
});

export default paymentSlice.reducer;
export const { setValid, unSetValid, setDebitCardInfo } = paymentSlice.actions;
