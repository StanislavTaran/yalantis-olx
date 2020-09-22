import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/auth/useAuth';
import { getOriginsRequest } from '../../redux/products/productsActions';
import { useSelector } from 'react-redux';
import PagesRouter from '../../routes/PagesRouter';
import Header from '../Header/Header';
import AddProductForm from '../AddProductForm/AddProductForm';
import { getIsShowProductForm } from '../../redux/app/appSelectors';
import { getOrigins } from '../../redux/products/productsSelectors';

import styles from './App.module.css';

export default function App() {
  const { authAsync } = useAuth();
  const dispatch = useDispatch();
  const getProductsOrigins = useCallback(() => dispatch(getOriginsRequest()), [dispatch]);

  const isShowProductForm = useSelector(getIsShowProductForm);

  useEffect(() => {
    getProductsOrigins();
    authAsync();
  }, [getProductsOrigins, authAsync]);

  const origins = useSelector(getOrigins);

  return (
    <div className={styles.main}>
      <Header />
      {isShowProductForm && <AddProductForm origins={origins} />}

      <PagesRouter />
    </div>
  );
}
