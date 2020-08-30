export default {
  INDEX: {
    INDEX: '/',
  },

  CART: {
    INDEX: '/cart',
  },

  PRODUCT: {
    createPath: productId => ['/products', productId].filter(Boolean).join('/'),
    INDEX: '/products/:productId?',
    DEFAULT_PATH: '/products',
  },
};
