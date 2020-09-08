import axios from 'axios';
import qs from 'qs';
import API_URLs from '../constants/olxAPI';

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

export const fetchOneProduct = productId => axios({ method: 'get', url: API_URLs.PRODUCT.createURL(productId) });

export const fetchOrigins = () => axios({ method: 'get', url: API_URLs.ORIGINS.INDEX });
