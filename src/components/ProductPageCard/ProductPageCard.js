import React from 'react';

import ProductCardBigContainer from '../ProductCardBig/ProductCardBigContainer';

export default function ProductPageCard({ product }) {
  return (
    <div>
      <ProductCardBigContainer product={product}>
        <p>Additional information will be here later...</p>
      </ProductCardBigContainer>
    </div>
  );
}
