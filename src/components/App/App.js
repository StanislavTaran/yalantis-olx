import React from 'react';
import propTypes from 'prop-types';
import PagesRouter from '../../routes/PagesRouter';
import Header from '../Header/HeaderContainer';
import Loader from '../Loader/Loader';

export default function App({ isLoading }) {
  return (
    <div className="App">
      <Header />
      {isLoading && <Loader />}
      <PagesRouter />
    </div>
  );
}

App.propTypes = {
  isLoading: propTypes.bool.isRequired,
};
