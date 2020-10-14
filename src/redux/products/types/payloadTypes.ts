export type ProductType = {
  isEditable: boolean;
  id: string;
  name: string;
  price: number;
  origin: string;
  createdAt: string;
  updatedAt: string;
};

export type PostProductType = {
  name: string;
  price: number;
  origin: string;
};

export type PatchProductType = {
  productId: string;
  values: {
    name: string;
    price: number;
    origin: string;
  };
};

export type OriginType = {
  value: string;
  displayName: string;
};
