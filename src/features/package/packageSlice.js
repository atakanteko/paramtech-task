import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {fetchPackages} from "../../client/package";

const initialState = {
    packages: [],
    isLoading: false,
    selectedPackages: [],
};

export const getPackageData = createAsyncThunk(
    'package/getPackageData',
    async (_, thunkAPI) => {
        try {
            const resp = await fetchPackages()
            if (resp.status === 200) {
                return resp.data;
            }
        } catch (error){
            return thunkAPI.rejectWithValue(error.response.data.msg);
        }
    }
);

const packageSlice = createSlice({
    name: 'package',
    initialState,
    reducers: {
        pushSelectedPackages: (state, { payload }) =>{
            if (!state.selectedPackages.some((x) => x === payload.selectedItemId)){
                state.selectedPackages.push(payload.selectedItemId);
            } else {
                const index = state.selectedPackages.indexOf(payload.selectedItemId);
                if (index > -1) {
                    state.selectedPackages.splice(index, 1);
                }
            }
        }

    },
    extraReducers:{
        [getPackageData.pending]: (state) => {
            state.isLoading = true;
        },
        [getPackageData.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.packages = payload;
        },
        [getPackageData.rejected]: (state) => {
            state.isLoading = false;
        },
    }
});

export default packageSlice.reducer;
export const { pushSelectedPackages } = packageSlice.actions;
