import { createReducer } from "@reduxjs/toolkit"

import {
    furnitureFetching,
    furnitureFetched,
    furnitureFetchingError,
} from '../actions';

const initialState = {
    furniture:[],
    furnitureLoadingStatus:'idle'
}


const furniture = createReducer(initialState, builder => {
    builder
        .addCase(furnitureFetching, state => {
            state.furnitureLoadingStatus = 'loading';
        })
        .addCase(furnitureFetched, (state, action) => {
            state.furnitureLoadingStatus = 'idle'
            state.furniture = action.payload;
        })
        .addCase(furnitureFetchingError, state => {
            state.furnitureLoadingStatus = 'error';
        })
        .addDefaultCase(() => {})
})


export default furniture;

