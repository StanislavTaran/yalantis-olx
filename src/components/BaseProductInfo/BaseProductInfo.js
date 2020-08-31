import React from 'react';
import propTypes from 'prop-types';
import OriginLabel from '../share/labels/OriginLabel/OriginLabel';
import DateLabel from '../share/labels/DateLabel/DateLabel';
import SimpleLabel from '../share/labels/SimpleLabel/SimpleLabel';

import currencyFormatter from '../../helpers/currencyFormatter';
import defaultProductImage from '../../images/default-avatar.jpg';
import styles from './BaseProductInfo.module.css';

export default function BaseProductInfo({ product }) {
  return (
    <>
      <img src={defaultProductImage} alt={product.name} className={styles.image} />
      <SimpleLabel overStyle={styles.name} text={product.name} />
      <SimpleLabel text={`Price : ${currencyFormatter(product.price)}`} />
      <OriginLabel origin={product.origin} />
      <DateLabel text="Created at" iso={product.createdAt} />
      <DateLabel text="Updated at" iso={product.updatedAt} />
    </>
  );
}

BaseProductInfo.propTypes = {
  product: propTypes.shape({
    name: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    origin: propTypes.string.isRequired,
    createdAt: propTypes.string.isRequired,
    updatedAt: propTypes.string.isRequired,
  }).isRequired,
};
