import React from 'react';
import { useSelector } from 'react-redux';
import { getProducts } from '../../redux/products/productsSelectors';
import ProductsList from './ProductsList';

export default function ProductsListContainer() {
  const products = useSelector(getProducts);
  return <ProductsList products={products} />;
}
