import React, { useCallback, useState } from 'react';
import { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import SidePortal from '../Portal/SidePortal';

import { useSelector, useDispatch } from 'react-redux';
import { getFilteredOrigins } from '../../redux/filters/filtersSelectors';
import { setOrigins, setPrice, setPerPage } from '../../redux/filters/filtersActions';

import { getOrigins } from '../../redux/products/productsSelectors';
import { getIsShowFilters } from '../../redux/app/appSelectors';
import { showFilters } from '../../redux/app/appActions';

import Select from '../share/inputs/Select/Select';
import Button from '../share/buttons/Button/Button';
import CheckboxGroup from '../share/inputs/CheckboxGroup/CheckboxGroup';

import { productsPerPage, productsPriceRange } from '../../constants/productsFilters';

import styles from './FilterForm.module.css';
import filtersIcon from '../../images/filters.svg';

export default function FilterForm() {
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
    <aside className={styles.container}>
      {!isShowFilters && (
        <Button onClick={handleShowFilters} overStyle={styles.filtersShowButton}>
          <img src={filtersIcon} alt="filters" />
        </Button>
      )}
      {isShowFilters && (
        <SidePortal onClose={handleShowFilters}>
          <div className={styles.formContainer}>
            <form id="filterForm">
              <div>
                <span>Products on page </span>
                <Select options={productsPerPage} onChange={handleSetQuantityProductsOnPage} />

                <fieldset>
                  <legend>Choise by region</legend>
                  <CheckboxGroup onChange={handleSetOrigins} name="origins" value={filteredOrigins} items={origins} />
                </fieldset>
              </div>
              <div className={styles.priceContainer}>
                <fieldset>
                  <legend>Filter by price</legend>
                  <span className={styles.priceRangeValues}>
                    {priceLocal[0]} - {priceLocal[1]}
                  </span>
                  <Range
                    className="price-filter-range"
                    min={productsPriceRange[0]}
                    max={productsPriceRange[1]}
                    value={priceLocal}
                    allowCross={false}
                    pushable={100}
                    onChange={handleSetPriceLocal}
                    onAfterChange={handleSetPrice}
                  />
                </fieldset>
              </div>
            </form>
          </div>
        </SidePortal>
      )}
    </aside>
  );
}
