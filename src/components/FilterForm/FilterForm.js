import React, { useCallback } from 'react';
import CheckboxGroup from 'react-checkbox-group';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import debounce from 'debounce';

import { useSelector, useDispatch } from 'react-redux';
import { getFilteredOrigins } from '../../redux/filters/filtersSelectors';
import { setOrigins, setPrice, setPerPage } from '../../redux/filters/filtersActions';

import { getOrigins } from '../../redux/products/productsSelectors';
import { fetchAllProducts } from '../../redux/products/productsOperations';
import { getFilters } from '../../redux/filters/filtersSelectors';

import { getIsShowFilters } from '../../redux/app/appSelectors';
import { showFilters } from '../../redux/app/appActions';

import { getFilteredPrice } from '../../redux/filters/filtersSelectors';
import { mapFiltersToParams } from '../../helpers/mapFiltersToParams';

import Select from '../share/inputs/Select/Select';
import Button from '../share/buttons/Button/Button';

import { productsPerPage, productsPriceRange } from '../../constants/productsFilters';

import styles from './FilterForm.module.css';
import filtersIcon from '../../images/filters.svg';

export default function FilterForm() {
  const origins = useSelector(getOrigins);
  const filteredOrigins = useSelector(getFilteredOrigins);
  const dispatch = useDispatch();

  const sliderValues = useSelector(getFilteredPrice);

  const handleSetOrigins = item => {
    return dispatch(setOrigins(item));
  };

  const handleSetPrice = useCallback(
    debounce(value => dispatch(setPrice(value)), 10),
    [dispatch],
  );

  const handleSetQuantityProductsOnPage = e => dispatch(setPerPage(e.target.value));

  const isShowFilters = useSelector(getIsShowFilters);
  const handleShowFilters = () => dispatch(showFilters(!isShowFilters));

  const filters = useSelector(getFilters);

  const handleFiltersSubmit = e => {
    e.preventDefault();
    handleShowFilters();
    dispatch(fetchAllProducts(mapFiltersToParams(filters)));
  };

  return (
    <aside className={styles.container}>
      <Button onClick={handleShowFilters} overStyle={styles.filtersShowButton}>
        <img src={filtersIcon} alt="filters" />
      </Button>
      {isShowFilters && (
        <div className={styles.formContainer}>
          <Button onClick={handleShowFilters} overStyle={styles.filtersHideButton} />
          <form id="filterForm">
            <div>
              <p>
                <span>Products on page </span>
                <Select options={productsPerPage} onChange={handleSetQuantityProductsOnPage} />
              </p>

              <fieldset>
                <legend>Choise by region</legend>
                <CheckboxGroup name="origins" value={filteredOrigins} onChange={handleSetOrigins}>
                  {Checkbox => (
                    <>
                      {origins.map(item => (
                        <label key={item.value} className={styles.label}>
                          <Checkbox value={item.value} /> {item.displayName}
                        </label>
                      ))}
                    </>
                  )}
                </CheckboxGroup>
              </fieldset>
            </div>
            <div className={styles.priceContainer}>
              <fieldset>
                <legend>Filter by price</legend>
                <span className={styles.priceRangeValues}>
                  {sliderValues[0]} - {sliderValues[1]}
                </span>
                <Range
                  className="price-filter-range"
                  min={productsPriceRange[0]}
                  max={productsPriceRange[1]}
                  value={sliderValues}
                  allowCross={false}
                  pushable={100}
                  onChange={handleSetPrice}
                  tipFormatter={value => <span className="tooltip">{value}</span>}
                />
              </fieldset>
            </div>
            <Button type="submit" onClick={handleFiltersSubmit}>
              Show results
            </Button>
          </form>
        </div>
      )}
    </aside>
  );
}
