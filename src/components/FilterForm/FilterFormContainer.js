import React, { useCallback, useState } from 'react';
import 'rc-slider/assets/index.css';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredOrigins } from '../../redux/filters/filtersSelectors';
import { setOrigins, setPrice, setPerPage } from '../../redux/filters/filtersActions';
import { getOrigins } from '../../redux/products/productsSelectors';
import { getIsShowFilters } from '../../redux/app/appSelectors';
import { showFilters } from '../../redux/app/appActions';

import { productsPerPage, productsPriceRange } from '../../constants/productsFilters';

import FilterForm from './FilterForm';

export default function FilterFormContainer() {
  const [priceLocal, setPriceLocal] = useState(productsPriceRange);
  const handleSetPriceLocal = value => setPriceLocal(value);

  const origins = useSelector(getOrigins);
  const filteredOrigins = useSelector(getFilteredOrigins);

  const dispatch = useDispatch();

  const handleSetOrigins = item => {
    return dispatch(setOrigins(item));
  };

  const handleSetPrice = useCallback(() => dispatch(setPrice(priceLocal)), [dispatch, priceLocal]);

  const handleSetQuantityProductsOnPage = e => dispatch(setPerPage(e.target.value));

  const isShowFilters = useSelector(getIsShowFilters);
  const handleShowFilters = () => dispatch(showFilters(!isShowFilters));

  return (
    <FilterForm
      isShowFilters={isShowFilters}
      handleShowFilters={handleShowFilters}
      handleSetQuantityProductsOnPage={handleSetQuantityProductsOnPage}
      handleSetOrigins={handleSetOrigins}
      origins={origins}
      filteredOrigins={filteredOrigins}
      handleSetPriceLocal={handleSetPriceLocal}
      handleSetPrice={handleSetPrice}
      priceLocal={priceLocal}
      productsPerPageOptions={productsPerPage}
      productsPriceRangeOptions={productsPriceRange}
    />
  );
}
