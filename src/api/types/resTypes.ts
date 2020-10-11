import * as payloadTypes from '../../redux/products/types/payloadTypes';

export type ResProductsType = {
  page: number;
  perPage: number;
  totalItems: number;
  items: payloadTypes.ProductType[];
};

export type OriginType = {
  name: string;
  displayName: string;
};

export type ResOriginsType = Array<OriginType>;
