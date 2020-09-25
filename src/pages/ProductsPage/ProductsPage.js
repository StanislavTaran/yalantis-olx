import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useResetFilters from '../../hooks/useResetFilters';
import { useGetFiltersFromURL } from '../../hooks/useGetFiltersFromURL';
import { getProductsRequest, getOwnProductsRequest } from '../../redux/products/productsActions';
import { setPage, setEditable } from '../../redux/filters/filtersActions';
import { getPerPage, getCurrentPage, getFilters } from '../../redux/filters/filtersSelectors';
import { getTotalQuantity } from '../../redux/products/productsSelectors';
import ProductsListContainer from '../../components/ProductsList/ProductsListContainer';
import Pagination from '../../components/share/Pagination/Pagination';
import FilterFormContainer from '../../components/FilterForm/FilterFormContainer';
import scrollUp from '../../helpers/scrollUp';
import styles from './ProductsPage.module.css';

export default function ProductsPage({ ownProducts = false }) {
  const { getFiltersFromURL } = useGetFiltersFromURL();
  const { resetFilters } = useResetFilters();

  const filters = useSelector(getFilters);

  const dispatch = useDispatch();
  const fetchProducts = useCallback(() => {
    dispatch(setEditable(false));
    dispatch(getProductsRequest());
  }, [dispatch]);

  const fetchMyProducts = useCallback(() => {
    dispatch(setEditable(true));
    dispatch(getOwnProductsRequest());
  }, [dispatch]);

  const totalProducts = useSelector(getTotalQuantity);
  const currentPage = useSelector(getCurrentPage);
  const perPage = useSelector(getPerPage);

  const handlePaginate = value => {
    dispatch(setPage(value));
    scrollUp();
  };

  useEffect(() => {
    getFiltersFromURL();
  }, [getFiltersFromURL]);

  useEffect(() => {
    ownProducts ? fetchMyProducts() : fetchProducts();
    return resetFilters();
  }, [fetchProducts, fetchMyProducts, ownProducts, filters, resetFilters]);

  return (
    <>
      <section>
        <div className={styles.wrap}>
          <FilterFormContainer />
          <ProductsListContainer />
        </div>
        {totalProducts && (
          <Pagination total={totalProducts} currentPage={currentPage} perPage={perPage} onChange={handlePaginate} />
        )}
      </section>
    </>
  );
}
