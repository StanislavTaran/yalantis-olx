import { RootStateType } from '../store';

export const getErrors = (state: RootStateType) => state.app.errors;

export const getIsLoading = (state: RootStateType) => state.app.isLoading;

export const getIsShowFilters = (state: RootStateType) => state.app.isShowFilters;

export const getIsShowProductForm = (state: RootStateType) => state.app.isShowProductForm;
