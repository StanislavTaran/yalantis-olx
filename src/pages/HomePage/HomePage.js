import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useResetFilters from '../../hooks/useResetFilters';
import { getProductsRequest, getOwnProductsRequest } from '../../redux/products/productsActions';
import { setPage } from '../../redux/filters/filtersActions';
import { getPerPage, getCurrentPage } from '../../redux/filters/filtersSelectors';
import { getTotalQuantity } from '../../redux/products/productsSelectors';
import ProductsList from '../../components/ProductsList/ProductsList';
import Pagination from '../../components/share/Pagination/Pagination';
import FilterForm from '../../components/FilterForm/FilterForm';
import scrollUp from '../../helpers/scrollUp';
import styles from './HomePage.module.css';

export default function HomePage({ ownProducts = false }) {
  useResetFilters();

  const dispatch = useDispatch();
  const fetchProducts = useCallback(() => dispatch(getProductsRequest()), [dispatch]);
  const fetchMyProducts = useCallback(() => dispatch(getOwnProductsRequest()), [dispatch]);

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
