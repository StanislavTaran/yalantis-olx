import React, { useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProductPageCard from '../../components/ProductPageCard/ProductPageCard';
import { fetchOneProduct } from '../../redux/products/productsOperations';
import { getCurrentProduct } from '../../redux/products/productsSelectors';

export default function ProductPage() {
  const { productId } = useParams();

  const dispatch = useDispatch();
  const fetchCurrentProduct = useCallback(() => dispatch(fetchOneProduct(productId)), [dispatch, productId]);

  useEffect(() => {
    fetchCurrentProduct();
  }, [fetchCurrentProduct]);

  const product = useSelector(getCurrentProduct);

  return <section>{Object.keys(product).length && <ProductPageCard product={product} />}</section>;
}
