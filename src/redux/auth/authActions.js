import { createAction } from '@reduxjs/toolkit';

export const logInRequest = createAction('auth/LOGIN_REQUEST');
export const logInSucces = createAction('app/LOGIN_SUCCES');
export const logInError = createAction('app/LOGIN_ERROR');
