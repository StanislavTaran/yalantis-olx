import React from 'react';
import propTypes from 'prop-types';
import PagesRouter from '../../routes/PagesRouter';
import Header from '../Header/HeaderContainer';
import Loader from '../Loader/Loader';

export default function App({ isLoading }) {
  return (
    <div className="App" style={{ paddingTop: '70px' }}>
      <Header />
      {isLoading && <Loader />}
      <PagesRouter />
    </div>
  );
}

App.propTypes = {
  isLoading: propTypes.bool.isRequired,
};
