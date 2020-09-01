import axios from 'axios';
import qs from 'qs';
import { BASE_URL } from '../constants/olxAPI';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {};

export const fetchProducts = params =>
  axios({
    method: 'get',
    url: '/products',
    params,
    paramsSerializer: function (params) {
      return qs.stringify(params, { arrayFormat: 'comma' });
    },
  });

export const fetchOneProduct = productId => axios({ method: 'get', url: `/products/${productId}` });

export const fetchOrigins = () => axios({ method: 'get', url: '/products-origins' });
