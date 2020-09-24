import React from 'react';
import propTypes from 'prop-types';
import styles from './App.module.css';
import HeaderContainer from '../Header/HeaderContainer';
import AddProductFormContainer from '../AddProductForm/AddProductFormContainer';
import PagesRouter from '../../routes/PagesRouter';

export default function App({ isShowProductForm, origins }) {
  return (
    <div className={styles.main}>
      <HeaderContainer />
      {isShowProductForm && <AddProductFormContainer origins={origins} />}
      <PagesRouter />
    </div>
  );
}

App.propTypes = {
  isShowProductForm: propTypes.bool.isRequired,
  origins: propTypes.arrayOf(propTypes.string).isRequired,
};
