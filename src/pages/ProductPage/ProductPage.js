import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCardBig from '../../components/ProductCardBig/ProductCardBigContainer';
import { fetchProduct } from '../../api/olxAPI';

export default function ProductPage() {
  const { productId } = useParams();

  const [product, setProduct] = useState({});
  const [error, setError] = useState({});

  useEffect(() => {
    fetchProduct(productId)
      .then(res => setProduct({ ...res.data }))
      .catch(e => setError({ ...e }));
  }, [productId]);

  return (
    <section>
      <p>{error && error.message}</p>
      <ProductCardBig product={product} />
    </section>
  );
}
