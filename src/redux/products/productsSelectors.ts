import { RootStateType } from '../store';
import { ProductType } from '../products/types/payloadTypes';

export const getProducts = (state: RootStateType) => state.products.products;

export const getCurrentProduct = (state: RootStateType) => state.products.currentProduct;

export const getOrigins = (state: RootStateType) => state.products.origins;

export const getTotalQuantity = (state: RootStateType) => state.products.totalProducts;

export const getEditedProduct = (state: RootStateType) => state.products.editedProduct;

export const getIsOwnProduct = (product: ProductType) => () => product.isEditable;
