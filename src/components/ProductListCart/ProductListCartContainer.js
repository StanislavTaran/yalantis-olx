import React from 'react';
import { getProductsInCart, getTotalPrice } from '../../redux/cart/cartSelectors';
import { useSelector } from 'react-redux';
import ProductListCart from './ProductListCart';

export default function ProductListCartContainer() {
  const products = useSelector(getProductsInCart);
  const totalPrice = useSelector(getTotalPrice);
  return <ProductListCart products={products} totalPrice={totalPrice} />;
}
