import axios from 'axios';
import { BASE_URL } from '../constants/olxAPI';

axios.defaults.baseURL = BASE_URL;

export const fetchProducts = () => axios({ method: 'get', url: '/products' });

export const fetchOneProduct = productId => axios({ method: 'get', url: `/products/${productId}` });
