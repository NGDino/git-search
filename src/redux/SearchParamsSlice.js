import {createSlice} from '@reduxjs/toolkit';

export const searchParamsSlice = createSlice ({
    name:'searchParams',
    initialState: {
        q: '',
        language: ''
    },
    reducers: {
        changeParams: (state, action) => {
            state == action.payload
        }
    }
})

export const { changeParams } = searchParamsSlice.actions;

export default searchParamsSlice.reducer;