import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useResetFilters from '../../hooks/useResetFilters';
import { getProductsRequest, getOwnProductsRequest } from '../../redux/products/productsActions';
import { setPage } from '../../redux/filters/filtersActions';
import { getPerPage, getCurrentPage, getFilters } from '../../redux/filters/filtersSelectors';
import { getTotalQuantity } from '../../redux/products/productsSelectors';
import ProductsList from '../../components/ProductsList/ProductsList';
import Pagination from '../../components/share/Pagination/Pagination';
import FilterForm from '../../components/FilterForm/FilterForm';
import scrollUp from '../../helpers/scrollUp';
import styles from './ProductsPage.module.css';

export default function ProductsPage({ ownProducts = false }) {
  useResetFilters();

  const filters = useSelector(getFilters);
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
  }, [fetchProducts, fetchMyProducts, ownProducts, filters]);

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
