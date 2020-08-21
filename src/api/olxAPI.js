import axios from 'axios';
import { BASE_URL } from '../constants/olxAPI';

axios.defaults.baseURL = BASE_URL;

export const fetchProducts = () => axios.get('/products');

export const fetchProduct = productId => axios.get(`/products/${productId}`);
