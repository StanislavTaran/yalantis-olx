import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ProductCardBig from '../../components/ProductCardBig/ProductCardBigContainer';
import { fetchProduct } from '../../api/olxAPI';
import Notification from '../../components/Notification/Notification';

export default function ProductPage({ loaderOn, loaderOff, isLoading }) {
  const { productId } = useParams();

  const [product, setProduct] = useState({});
  const [error, setError] = useState({});

  useEffect(() => {
    loaderOn();
    fetchProduct(productId)
      .then(res => setProduct({ ...res.data }))
      .catch(e => setError({ ...e.response.data.error }))
      .finally(() => {
        loaderOff();
      });
  }, [productId, loaderOn, loaderOff]);

  return (
    <section>
      {error.message && <Notification inProp={error.message} message={error.message} />}
      {!error.message && product.id && <ProductCardBig product={product} />}
      {error.message && <Link to="/">HOME PAGE</Link>}
    </section>
  );
}
