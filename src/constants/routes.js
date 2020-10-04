export default {
  INDEX: {
    INDEX: '/products',
  },
  OWN_PRODUCTS: {
    INDEX: '/products/own',
  },

  CART: {
    INDEX: '/cart',
  },

  PRODUCT: {
    createPath: productId => ['/products', productId].filter(Boolean).join('/'),
    INDEX: '/products/:productId',
    DEFAULT_PATH: '/products',
  },
};
