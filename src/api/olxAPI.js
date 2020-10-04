import axios from 'axios';
import qs from 'qs';
import API_URLs from '../constants/olxAPI';

const { REACT_APP_API_TOKEN } = process.env;

axios.defaults.headers.common['Authorization'] = REACT_APP_API_TOKEN;
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

export const patchProduct = ({ productId, values }) => {
  return axios({
    method: 'patch',
    url: API_URLs.PRODUCT.createURL(productId),
    params: { productId },
    data: { product: values },
  });
};

export const fetchOrigins = () => axios({ method: 'get', url: API_URLs.ORIGINS.INDEX });
