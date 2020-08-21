import React from 'react';
import propTypes from 'prop-types';
import styles from './ProductCardBig.module.css';
import moment from 'moment';

export default function ProductCardBig(product) {
  return (
    <article>
      <div className={styles.container}>
        <p className={styles.name}>{product.name}</p>
        <p className={styles.price}>Price : {product.price}</p>
        <p className={styles.origin}>Origin : {product.origin}</p>
        <p className={styles.dateOfCreated}>
          Created at : {moment(product.createdAt, moment.ISO_8601).format('YYYY-MM-DD')}
        </p>
      </div>
    </article>
  );
}

ProductCardBig.propTypes = {
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
