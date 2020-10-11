export type IsEditableType = true | false;

export type ProductType = {
  isEditable: IsEditableType;
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
  id: string;
  name: string;
  price: number;
  origin: string;
  createdAt: string;
  updatedAt: string;
};

export type OriginType = {
  value: string;
  displayValue: string;
};
