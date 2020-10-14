import * as payloadTypes from '../../redux/products/types/payloadTypes';

export interface ServerResponse {
  data: ProductsServerData | OneProductServerData;
}

export interface ProductsServerData {
  page: number;
  perPage: number;
  totalItems: number;
  items: payloadTypes.ProductType[];
}

export interface OneProductServerData {
  isEditable: string;
  id: string;
  name: string;
  price: number;
  origin: string;
  createdAt: string;
  updatedAt: string;
}

export type OriginType = {
  name: string;
  displayName: string;
};

export type ResOriginsType = Array<OriginType>;
