import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts, fetchOwnProducts } from '../../redux/products/productsOperations';
import { setPage } from '../../redux/filters/filtersActions';
import { getFilters, getPerPage, getCurrentPage } from '../../redux/filters/filtersSelectors';
import { getTotalQuantity, getOrigins } from '../../redux/products/productsSelectors';
import { getIsShowProductForm } from '../../redux/app/appSelectors';
import { showProductForm } from '../../redux/app/appActions';
import ProductsList from '../../components/ProductsList/ProductsList';
import Pagination from '../../components/share/Pagination/Pagination';
import Modal from '../../components/Portal/Modal/Modal';
import FilterForm from '../../components/FilterForm/FilterForm';
import { mapFiltersToParams } from '../../helpers/mapFiltersToParams';
import { postProduct } from '../../api/olxAPI';
import scrollUp from '../../helpers/scrollUp';
import styles from './HomePage.module.css';

import AddProductForm from '../../components/AddProductForm/AddProductForm';

export default function HomePage({ ownProducts = false }) {
  const dispatch = useDispatch();
  const params = useSelector(getFilters);
  const fetchProducts = useCallback(() => dispatch(fetchAllProducts(mapFiltersToParams(params))), [dispatch, params]);
  const fetchMyProducts = useCallback(() => dispatch(fetchOwnProducts(mapFiltersToParams(params))), [dispatch, params]);

  const totalProducts = useSelector(getTotalQuantity);
  const currentPage = useSelector(getCurrentPage);
  const perPage = useSelector(getPerPage);

  const origins = useSelector(getOrigins);

  const isShowProductForm = useSelector(getIsShowProductForm);
  const handleOpenProductForm = () => dispatch(showProductForm(!isShowProductForm));

  const handlePaginate = value => {
    dispatch(setPage(value));
    scrollUp();
  };

  const handleSubmitForm = values => {
    postProduct(values)
      .then(() => {
        handleOpenProductForm();
      })
      .catch(e => {})
      .finally(() => {});
  };

  useEffect(() => {
    ownProducts ? fetchMyProducts() : fetchProducts();
  }, [fetchProducts, fetchMyProducts, ownProducts]);

  return (
    <>
      <section>
        {isShowProductForm && (
          <Modal onClose={handleOpenProductForm}>
            <AddProductForm origins={origins} handleSubmit={handleSubmitForm} />
          </Modal>
        )}

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
