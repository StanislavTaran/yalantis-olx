import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllProducts } from '../../redux/products/productsOperations';
import ProductsList from '../../components/ProductsList/ProductsList';
import FilterForm from '../../components/FilterForm/FilterForm';
import styles from './HomePage.module.css';

export default function HomePage() {
  const dispatch = useDispatch();

  const fetchProducts = useCallback(() => dispatch(fetchAllProducts()), [dispatch]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <section className={styles.page}>
      <FilterForm />
      <ProductsList />
    </section>
  );
}
