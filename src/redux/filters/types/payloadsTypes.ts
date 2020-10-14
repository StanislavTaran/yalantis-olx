const origins = ['asia', 'usa', 'africa', 'europe'];
export type OriginsType = typeof origins;

export type FiltersType = {
  origins?: OriginsType;
  price?: number;
  perPage?: number;
  page?: number;
  editable?: boolean;
};
