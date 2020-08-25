import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ProductCardBig from '../../components/ProductCardBig/ProductCardBig';
import { fetchProduct } from '../../api/olxAPI';
import { HOME_PAGE_ROUTE } from '../../constants/routes';

import { loaderOn, loaderOff } from '../../redux/app/appActions';
import { useDispatch } from 'react-redux';

export default function ProductPage() {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState({});

  useEffect(() => {
    dispatch(loaderOn());
    fetchProduct(productId)
      .then(res => setProduct({ ...res.data }))
      .catch(e => console.log({ ...e.response.data.error }))
      .finally(() => {
        dispatch(loaderOff());
      });
  }, [productId, dispatch]);

  return (
    <section>
      {product.id && <ProductCardBig product={product} />}
      {!product.id && <Link to={HOME_PAGE_ROUTE}>HOME PAGE</Link>}
    </section>
  );
}
