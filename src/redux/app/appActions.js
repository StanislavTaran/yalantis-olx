import { createAction } from '@reduxjs/toolkit';

export const loaderOn = createAction('app/LOADER_ON');
export const loaderOff = createAction('app/LOADER_OFF');

export const showFilters = createAction('app/SHOW_FILTER');
