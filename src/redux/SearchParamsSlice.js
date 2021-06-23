// import {createSlice} from '@reduxjs/toolkit';

// let initialParams = {
//     searchParams: {

//     }
// }

// export const searchParamsSlice = createSlice ({
//     name:'searchParams',
//     initialState: {
//         searchParams: localStorage.getItem('searchParams')
//             ? JSON.parse(localStorage.getItem('searchParams')) : {},
//     },
//     reducers: {
//         changeParams: (state, action) => {
//             console.log(action)
//             state.searchParams = action.payload
//         }
//     }
// })

// export const { changeParams } = searchParamsSlice.actions;

// export default searchParamsSlice.reducer;