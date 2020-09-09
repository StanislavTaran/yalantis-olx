import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchOrigins } from '../../redux/products/productsOperations';

import { useSelector } from 'react-redux';
import PagesRouter from '../../routes/PagesRouter';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import { getIsLoading } from '../../redux/app/appSelectors';

import styles from './App.module.css';

export default function App() {
  const dispatch = useDispatch();
  const getOrigins = useCallback(() => dispatch(fetchOrigins()), [dispatch]);

  useEffect(() => {
    getOrigins();
  }, [getOrigins]);

  const isLoading = useSelector(getIsLoading);
  return (
    <div className={styles.main}>
      <Header />
      {isLoading && <Loader />}
      <PagesRouter />
    </div>
  );
}
