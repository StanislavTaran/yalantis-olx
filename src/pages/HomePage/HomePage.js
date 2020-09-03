import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts } from '../../redux/products/productsOperations';
import { getFilters } from '../../redux/filters/filtersSelectors';
import ProductsList from '../../components/ProductsList/ProductsList';
import FilterForm from '../../components/FilterForm/FilterForm';
import { mapFiltersToParams } from '../../helpers/mapFiltersToParams';
import styles from './HomePage.module.css';

export default function HomePage() {
  const dispatch = useDispatch();
  const params = useSelector(getFilters);
  const fetchProducts = useCallback(() => dispatch(fetchAllProducts(mapFiltersToParams(params))), [dispatch, params]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <>
      <section>
        <div className={styles.wrap}>
          <FilterForm />
          <ProductsList />
        </div>
      </section>
    </>
  );
}
