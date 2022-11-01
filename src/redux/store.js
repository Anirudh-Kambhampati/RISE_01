import { configureStore } from '@reduxjs/toolkit';

import adminReducer from './adminPage/adminSlice';

export const store = configureStore({
    reducer:{
        admin : adminReducer
    }
})