import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../share/buttons/Button/Button';
import OriginLabel from '../share/labels/OriginLabel/OriginLabel';
import DateLabel from '../share/labels/DateLabel/DateLabel';
import SimpleLabel from '../share/labels/SimpleLabel/SimpleLabel';

import styles from './ProductItem.module.css';
import image from '../../images/default-avatar.jpg';

import { isAlreadyInCart } from '../../helpers/productHelpers';
import currencyFormatter from '../../helpers/currencyFormatter';

import { useDispatch, useSelector } from 'react-redux';
import { getProductsIdInCart } from '../../redux/cart/cartSelectors';
import { addProductToCart, removeProductFromCart } from '../../redux/cart/cartOperatins';

export default function ProductItem({ product }) {
  const productsInCart = useSelector(getProductsIdInCart);
  const dispatch = useDispatch();

  const isInCart = isAlreadyInCart(product.id, productsInCart);

  return (
    <li className={styles.container}>
      <Link to={`/products/${product.id}`} className={styles.link}>
        <img src={image} alt={product.name} className={styles.image} />
        <SimpleLabel className={styles.name} text={product.name} />
        <SimpleLabel text={'Price'} value={currencyFormatter(product.price)} />
        <OriginLabel origin={product.origin} />
        <DateLabel text={'Created at'} iso={product.createdAt} />
        <DateLabel text={'Updated at'} iso={product.updatedAt} />
      </Link>

      <div>
        {isInCart ? (
          <Button onClick={() => dispatch(removeProductFromCart(product.id))}>Remove from cart</Button>
        ) : (
          <Button type="submit" onClick={() => dispatch(addProductToCart(product))}>
            Add to cart
          </Button>
        )}
      </div>
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
    isEditable: propTypes.bool.isRequired,
  }),
};
