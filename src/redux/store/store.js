import { configureStore } from '@reduxjs/toolkit';
import furniture from '../reducers/furniture';
import filters from '../reducers/filters';

const store = configureStore({
        reducer:{furniture, filters},
        middleware: getDefaultMiddleware => getDefaultMiddleware(),
        devTools: process.env.NODE_ENV !== 'production',
})

export default store;