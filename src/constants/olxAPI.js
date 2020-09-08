export default {
  BASE_URL: {
    INDEX: 'https://yalantis-react-school-api.yalantis.com/api/v1',
  },
  PRODUCTS: {
    INDEX: '/products',
  },
  PRODUCT: {
    createURL: productId => ['/products', productId].filter(Boolean).join('/'),
    INDEX: '/products/:productId',
  },
  ORIGINS: {
    INDEX: '/products-origins',
  },
};
