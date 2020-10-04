import qs from 'qs';
import { productsPerPage, productsPriceRange } from '../constants/productsFilters';

export const mapFiltersToParams = ({ page, perPage, price, origins, editable }) => {
  return { page, perPage, minPrice: price[0], maxPrice: price[1], origins, editable };
};

export const stringifyParams = params => {
  return `?${qs.stringify(params)}`;
};

export const parseFiltersFromUrl = queryString => {
  const parsedFilters = qs.parse(queryString.slice(1));

  return {
    ...parsedFilters,
    minPrice:
      typeof Number(parsedFilters.minPrice) === 'number' ? Number(parsedFilters.minPrice) : productsPriceRange[0],
    maxPrice:
      typeof Number(parsedFilters.maxPrice) === 'number' ? Number(parsedFilters.maxPrice) : productsPriceRange[1],
    perPage: typeof Number(parsedFilters.perPage) === 'number' ? Number(parsedFilters.perPage) : productsPerPage[0],
    page: typeof Number(parsedFilters.page) === 'number' ? Number(parsedFilters.page) : 1,
    editable: parsedFilters.editable && parsedFilters.editable === 'true' ? true : false,
  };
};
