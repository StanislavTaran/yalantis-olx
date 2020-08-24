import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ProductCardBig from '../../components/ProductCardBig/ProductCardBig';
import { fetchProduct } from '../../api/olxAPI';

import { loaderOn, loaderOff } from '../../redux/app/appActions';
import { useDispatch } from 'react-redux';

// переписать на тостр
export default function ProductPage() {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState({});
  const [error, setError] = useState({});

  useEffect(() => {
    dispatch(loaderOn());
    fetchProduct(productId)
      .then(res => setProduct({ ...res.data }))
      .catch(e => setError({ ...e.response.data.error }))
      .finally(() => {
        dispatch(loaderOff());
      });
  }, [productId, dispatch]);

  return (
    <section>
      {!error.message && product.id && <ProductCardBig product={product} />}
      {error.message && <Link to="/">HOME PAGE</Link>}
    </section>
  );
}
