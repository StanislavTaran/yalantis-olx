import { useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setFilters } from '../redux/filters/filtersActions';

import { parseFiltersFromUrl } from '../helpers/mapFiltersToParams';

export const useGetFiltersFromURL = () => {
  const dispatch = useDispatch();
  const { search } = useLocation();

  let filters = {};

  const getFiltersFromURL = useCallback(() => {
    if (search) {
      filters = parseFiltersFromUrl(search);
      dispatch(setFilters(filters));
    }
  }, [search]);

  return {
    getFiltersFromURL,
  };
};
