import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks/auth/useAuth';
import { getOriginsRequest } from '../../redux/products/productsActions';
import { useSelector } from 'react-redux';
import { getIsShowProductForm } from '../../redux/app/appSelectors';
import { getOrigins } from '../../redux/products/productsSelectors';
import App from './App';

export default function AppContainer() {
  const { authAsync } = useAuth();
  const dispatch = useDispatch();
  const getProductsOrigins = useCallback(() => dispatch(getOriginsRequest()), [dispatch]);

  const isShowProductForm = useSelector(getIsShowProductForm);

  useEffect(() => {
    getProductsOrigins();
    authAsync();
  }, [getProductsOrigins, authAsync]);

  const origins = useSelector(getOrigins);

  return <App isShowProductForm={isShowProductForm} origins={origins} />;
}
