import { object, string, number, mixed } from 'yup';
import { productsOrigins } from '../../constants/productsFilters';

const addProductSchema = object().shape({
  name: string()
    .min(3, 'Name must be at least 3 characters!')
    .max(20, 'Name must be no more than 20 characters!')
    .required('Name is required'),
  price: number().min(1, 'Price must be at least 1!').required('Price is required'),
  origin: mixed().oneOf(productsOrigins),
});

export default addProductSchema;
