import React from 'react';
import { useSelector } from 'react-redux';
import PagesRouter from '../../routes/PagesRouter';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import { getIsLoading } from '../../redux/app/appSelectors';

import styles from './App.module.css';

export default function App() {
  const isLoading = useSelector(getIsLoading);
  return (
    <div className={styles.main}>
      <Header />
      {isLoading && <Loader />}
      <PagesRouter />
    </div>
  );
}
