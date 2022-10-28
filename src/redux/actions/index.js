import { createAction } from "@reduxjs/toolkit";





export const furnitureFetching = createAction('FURNITURE_FETCHING');

export const furnitureFetched = createAction('FURNITURE_FETCHED');

export const furnitureFetchingError = createAction('FURNITURE_FETCHING_ERROR');

export const filtersFetching = createAction('FILTERS_FETCHING');

export const filtersFetched = createAction('FILTERS_FETCHED');

export const filtersFetchingError = createAction('FILTERS_FETCHING_ERROR');

