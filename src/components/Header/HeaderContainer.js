import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getTotalPrice, getTotalQuantity } from '../../redux/cart/cartSelectors';
import { getIsShowProductForm } from '../../redux/app/appSelectors';
import { showProductForm } from '../../redux/app/appActions';
import { setEditedProduct } from '../../redux/products/productsActions';
import Header from './Header';

export default function HeaderContainer() {
  const { pathname } = useLocation();
  const totalPrice = useSelector(getTotalPrice);
  const totalQuantity = useSelector(getTotalQuantity);

  const dispatch = useDispatch();
  const isShowProductForm = useSelector(getIsShowProductForm);

  const handleOpenProductForm = () => {
    dispatch(setEditedProduct({}));
    dispatch(showProductForm(!isShowProductForm));
  };

  return (
    <Header
      pathname={pathname}
      handleOpenProductForm={handleOpenProductForm}
      totalQuantity={totalQuantity}
      totalPrice={totalPrice}
    />
  );
}
