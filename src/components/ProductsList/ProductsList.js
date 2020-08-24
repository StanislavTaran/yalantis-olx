import React, { useEffect } from 'react';
import ProductItem from '../ProductItem/ProductItem';
import styles from './ProductsList.module.css';

import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/products/productsSelectors';
import { fetchAllProducts } from '../../redux/products/productsOperations';

export default function ProductsList() {
  const products = useSelector(getProducts);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchAllProducts()), [dispatch]);

  return (
    <div className={styles.container}>
      <ul className={styles.productList}>
        {products.map(item => (
          <ProductItem key={item.id} product={item} />
        ))}
      </ul>
    </div>
  );
}
