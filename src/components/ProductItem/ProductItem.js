import React from 'react';
import propTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';
import styles from './ProductItem.module.css';

export default function ProductItem({ product }) {
  return (
    <li>
      <Link to={`/products/${product.id}`} className={styles.link}>
        <div className={styles.container}>
          <p className={styles.name}>{product.name}</p>
          <p className={styles.price}>Price : {product.price}</p>
          <p className={styles.origin}>Origin : {product.origin}</p>
          <p className={styles.dateOfCreated}>
            Created at : {moment(product.createdAt, moment.ISO_8601).format('YYYY-MM-DD')}
          </p>
        </div>
      </Link>
    </li>
  );
}

ProductItem.propTypes = {
  product: propTypes.shape({
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    origin: propTypes.string.isRequired,
    createdAt: propTypes.string.isRequired,
    updatedAt: propTypes.string.isRequired,
    isEditable: propTypes.string.isRequired,
  }),
};
