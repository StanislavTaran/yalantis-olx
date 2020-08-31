import React, { useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ProductPageCard from '../../components/ProductPageCard/ProductPageCard';
import { fetchOneProduct } from '../../redux/products/productsOperations';

export default function ProductPage() {
  const { productId } = useParams();

  const dispatch = useDispatch();
  const fetchCurrentProduct = useCallback(() => dispatch(fetchOneProduct(productId)), [dispatch, productId]);

  useEffect(() => {
    fetchCurrentProduct();
  }, [fetchCurrentProduct]);

  return (
    <section>
      <ProductPageCard />
    </section>
  );
}
