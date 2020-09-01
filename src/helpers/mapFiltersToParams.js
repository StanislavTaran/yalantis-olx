export const mapFiltersToParams = ({ page, perPage, price, origins }) => {
  return { page, perPage, minPrice: price[0], maxPrice: price[1], origins };
};
