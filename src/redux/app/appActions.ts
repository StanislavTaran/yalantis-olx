import { createAction } from '@reduxjs/toolkit';
import withPayloadType from '../../helpers/redux/withPayloadType';

export const loaderOn = createAction('app/LOADER_ON', withPayloadType<boolean>());
export const loaderOff = createAction('app/LOADER_OFF', withPayloadType<boolean>());

export const showFilters = createAction('app/SHOW_FILTER', withPayloadType<boolean>());

export const showProductForm = createAction('app/SHOW_PRODUCT_FORM', withPayloadType<boolean>());
