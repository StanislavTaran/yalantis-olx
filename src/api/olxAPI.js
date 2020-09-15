import axios from 'axios';
import qs from 'qs';
import API_URLs from '../constants/olxAPI';

const token = localStorage.getItem('token');

axios.defaults.headers.common['Authorization'] = token;
axios.defaults.baseURL = API_URLs.BASE_URL.INDEX;
axios.defaults.params = {};

export const fetchProducts = params =>
  axios({
    method: 'get',
    url: API_URLs.PRODUCTS.INDEX,
    params,
    paramsSerializer: function (params) {
      return qs.stringify(params, { arrayFormat: 'comma' });
    },
  });

export const fetchOneProduct = productId =>
  axios({
    method: 'get',
    url: API_URLs.PRODUCT.createURL(productId),
  });

export const fetchOwnProducts = params =>
  axios({
    method: 'get',
    url: API_URLs.PRODUCTS.INDEX,
    params: { editable: true, ...params },
    paramsSerializer: function (params) {
      return qs.stringify(params, { arrayFormat: 'comma' });
    },
  });

export const postProduct = productData =>
  axios({
    method: 'post',
    url: API_URLs.PRODUCTS.INDEX,
    data: { product: productData },
  });

export const patchProduct = (productId, productData) =>
  axios({
    method: 'patch',
    url: API_URLs.PRODUCT.createURL(productId),
    params: { productId },
    data: { product: productData },
  });

export const fetchOrigins = () => axios({ method: 'get', url: API_URLs.ORIGINS.INDEX });
