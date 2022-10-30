import { createAction } from "@reduxjs/toolkit";

export const fetchFurniture = (request) => (dispatch) => {
    dispatch(furnitureFetching());
    request('http://localhost:3001/tables')
        .then(data => dispatch(furnitureFetched(data)))
        .catch(() => dispatch(furnitureFetchingError()))
}

export const fetchFilters = (request) => (dispatch) => {
    dispatch(filtersFetching());
    request('http://localhost:3001/filters')
        .then(data => dispatch(filtersFetched(data)))
        .catch(() => filtersFetchingError());
}
 
export const furnitureFetching = createAction('FURNITURE_FETCHING');

export const furnitureFetched = createAction('FURNITURE_FETCHED');

export const furnitureFetchingError = createAction('FURNITURE_FETCHING_ERROR');

export const filtersFetching = createAction('FILTERS_FETCHING');

export const filtersFetched = createAction('FILTERS_FETCHED');

export const filtersFetchingError = createAction('FILTERS_FETCHING_ERROR');

export const activeFilterChanged = createAction('ACTIVE_FILTER_CHANGED');

