import React from 'react';
import ProductItem from '../ProductItem/ProductItem';
import { useSelector } from 'react-redux';
import { getProducts } from '../../redux/products/productsSelectors';
import styles from './ProductsList.module.css';

export default function ProductsList() {
  const products = useSelector(getProducts);
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
