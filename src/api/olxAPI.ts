import axios from 'axios';
import qs from 'qs';
import API_URLs from '../constants/olxAPI';
import * as productsPayloadTypes from '../redux/products/types/payloadTypes';
import * as filtersPayloadTypes from '../redux/filters/types/payloadsTypes';

const { REACT_APP_API_TOKEN } = process.env;

axios.defaults.headers.common['Authorization'] = REACT_APP_API_TOKEN;
axios.defaults.baseURL = API_URLs.BASE_URL.INDEX;
axios.defaults.params = {};

export const fetchProducts = (params?: filtersPayloadTypes.FiltersType) =>
  axios({
    method: 'get',
    url: API_URLs.PRODUCTS.INDEX,
    params,
    paramsSerializer: function (params) {
      return qs.stringify(params, { arrayFormat: 'comma' });
    },
  });

export const fetchOneProduct = (productId: string) =>
  axios({
    method: 'get',
    url: API_URLs.PRODUCT.createURL(productId),
  });

export const fetchOwnProducts = (params?: filtersPayloadTypes.FiltersType) =>
  axios({
    method: 'get',
    url: API_URLs.PRODUCTS.INDEX,
    params: { editable: true, ...params },
    paramsSerializer: function (params) {
      return qs.stringify(params, { arrayFormat: 'comma' });
    },
  });

export const postProduct = (productData: productsPayloadTypes.PostProductType) =>
  axios({
    method: 'post',
    url: API_URLs.PRODUCTS.INDEX,
    data: { product: productData },
  });

type patchProductParamsType = {
  productId: string;
  values: productsPayloadTypes.PostProductType;
};

export const patchProduct = ({ productId, values }: patchProductParamsType) => {
  return axios({
    method: 'patch',
    url: API_URLs.PRODUCT.createURL(productId),
    params: { productId },
    data: { product: values },
  });
};

export const fetchOrigins = () => axios({ method: 'get', url: API_URLs.ORIGINS.INDEX });
