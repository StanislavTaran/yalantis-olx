import React from 'react';
import propTypes from 'prop-types';
import styles from './FilterForm.module.css';
import SidePortal from '../Portal/SidePortal/SidePortal';
import Select from '../share/inputs/Select/Select';
import CheckboxGroup from '../share/inputs/CheckboxGroup/CheckboxGroup';
import { Range } from 'rc-slider';
import CircleButton from '../share/buttons/CircleButton/CircleButton';
import filtersIcon from '../../images/filters.svg';

export default function FilterForm({
  isShowFilters,
  handleShowFilters,
  handleSetOrigins,
  handleSetQuantityProductsOnPage,
  origins,
  filteredOrigins,
  handleSetPriceLocal,
  handleSetPrice,
  priceLocal,
  productsPerPageOptions,
  productsPriceRangeOptions,
}) {
  return (
    <aside className={styles.container}>
      {isShowFilters ? (
        <SidePortal onClose={handleShowFilters}>
          <div className={styles.formContainer}>
            <form id="filterForm">
              <div>
                <span>Products on page </span>
                <Select options={productsPerPageOptions} onChange={handleSetQuantityProductsOnPage} />

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
                    min={productsPriceRangeOptions[0]}
                    max={productsPriceRangeOptions[1]}
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
      ) : (
        <CircleButton onClick={handleShowFilters} overStyle={styles.filtersShowButton}>
          <img src={filtersIcon} alt="filters" />
        </CircleButton>
      )}
    </aside>
  );
}

FilterForm.propTypes = {
  isShowFilters: propTypes.bool.isRequired,
  handleShowFilters: propTypes.func.isRequired,
  handleSetQuantityProductsOnPage: propTypes.func.isRequired,
  handleSetOrigins: propTypes.func.isRequired,
  origins: propTypes.arrayOf(
    propTypes.shape({
      value: propTypes.string.isRequired,
      displayName: propTypes.string.isRequired,
    }),
  ).isRequired,
  filteredOrigins: propTypes.arrayOf(propTypes.string).isRequired,
  handleSetPrice: propTypes.func.isRequired,
  handleSetPriceLocal: propTypes.func.isRequired,
  priceLocal: propTypes.arrayOf(propTypes.number).isRequired,
  productsPerPageOptions: propTypes.arrayOf(propTypes.number).isRequired,
  productsPriceRangeOptions: propTypes.arrayOf(propTypes.number).isRequired,
};
