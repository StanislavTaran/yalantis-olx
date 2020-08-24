import React from 'react';
import { useSelector } from 'react-redux';
import PagesRouter from '../../routes/PagesRouter';
import Header from '../Header/Header';
import Loader from '../Loader/Loader';
import { getIsLoading } from '../../redux/app/appSelectors';

export default function App() {
  const isLoading = useSelector(getIsLoading);
  return (
    <div className="App" style={{ paddingTop: '70px' }}>
      <Header />
      {isLoading && <Loader />}
      <PagesRouter />
    </div>
  );
}
