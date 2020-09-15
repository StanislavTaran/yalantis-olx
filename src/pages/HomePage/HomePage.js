import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useResetFilters from '../../hooks/useResetFilters';
import { fetchAllProducts, fetchOwnProducts } from '../../redux/products/productsOperations';
import { setPage } from '../../redux/filters/filtersActions';
import { getFilters, getPerPage, getCurrentPage } from '../../redux/filters/filtersSelectors';
import { getTotalQuantity } from '../../redux/products/productsSelectors';
import ProductsList from '../../components/ProductsList/ProductsList';
import Pagination from '../../components/share/Pagination/Pagination';
import FilterForm from '../../components/FilterForm/FilterForm';
import { mapFiltersToParams } from '../../helpers/mapFiltersToParams';
import scrollUp from '../../helpers/scrollUp';
import styles from './HomePage.module.css';

export default function HomePage({ ownProducts = false }) {
  useResetFilters();

  const dispatch = useDispatch();
  const params = useSelector(getFilters);
  const fetchProducts = useCallback(() => dispatch(fetchAllProducts(mapFiltersToParams(params))), [dispatch, params]);
  const fetchMyProducts = useCallback(() => dispatch(fetchOwnProducts(mapFiltersToParams(params))), [dispatch, params]);

  const totalProducts = useSelector(getTotalQuantity);
  const currentPage = useSelector(getCurrentPage);
  const perPage = useSelector(getPerPage);

  const handlePaginate = value => {
    dispatch(setPage(value));
    scrollUp();
  };

  useEffect(() => {
    ownProducts ? fetchMyProducts() : fetchProducts();
  }, [fetchProducts, fetchMyProducts, ownProducts]);

  return (
    <>
      <section>
        <div className={styles.wrap}>
          <FilterForm />
          <ProductsList />
        </div>
        {totalProducts && (
          <Pagination total={totalProducts} currentPage={currentPage} perPage={perPage} onChange={handlePaginate} />
        )}
      </section>
    </>
  );
}
