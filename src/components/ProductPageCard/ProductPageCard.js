import React from 'react';
import { useSelector } from 'react-redux';
import { getCurrentProduct } from '../../redux/products/productsSelectors';

import ProductCardBig from '../ProductCardBig/ProductCardBig';

export default function ProductPageCard() {
  const product = useSelector(getCurrentProduct);
  return (
    <div>
      <ProductCardBig product={product}>
        <p>Additional information will be here later...</p>
      </ProductCardBig>
    </div>
  );
}
