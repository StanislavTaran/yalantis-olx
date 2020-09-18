import React from 'react';

import ProductCardBig from '../ProductCardBig/ProductCardBig';

export default function ProductPageCard({ product }) {
  return (
    <div>
      <ProductCardBig product={product}>
        <p>Additional information will be here later...</p>
      </ProductCardBig>
    </div>
  );
}
