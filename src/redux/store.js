import { configureStore } from '@reduxjs/toolkit'
import searchParamsReducer from './SearchParamsSlice'

export default configureStore({
    reducer: {
        searchParams: searchParamsReducer
    },
})