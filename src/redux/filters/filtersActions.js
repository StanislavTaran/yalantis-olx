import { createAction } from '@reduxjs/toolkit';

// ORIGINS
export const setOrigins = createAction('filters/SET_ORIGINS');

// PRICE

export const setPrice = createAction('filters/SET_PRICE');

// PAGE
export const setPage = createAction('filters/SET_PAGE');

// PER PAGE
export const setPerPage = createAction('filters/SET_PER_PAGE');

// RESET
export const resetFilters = createAction('filters/RESET');

//EDITABLE
export const setEditable = createAction('filters/SET_EDITABLE');

// SET FROM URL
export const setFilters = createAction('filters/SET_FROM_URL');
