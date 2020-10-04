import React from 'react';
import propTypes from 'prop-types';
import styles from './ProductItem.module.css';
import { Link } from 'react-router-dom';
import routes from '../../constants/routes';
import BaseProductInfo from '../BaseProductInfo/BaseProductInfo';
import briefcase from '../../images/briefcase.svg';
import Button from '../share/buttons/Button/Button';
import ProductItemContainer from './ProductItemContainer';

export default function ProductItem({
  product,
  isInCart,
  handleRemoveProductFromCart,
  handleAddProductToCart,
  handleEditProduct,
  isOwnProduct,
}) {
  return (
    <li className={styles.container}>
      <Link to={routes.PRODUCT.createPath(product.id)} className={styles.link}>
        <BaseProductInfo product={product} />
      </Link>

      {isOwnProduct ? (
        <>
          <div className={styles.icon}>
            <img src={briefcase} alt="own product" />
          </div>

          <Button type="edit" onClick={handleEditProduct} className={styles.editButton}>
            Edit Product
          </Button>
        </>
      ) : (
        <div>
          {isInCart ? (
            <Button onClick={handleRemoveProductFromCart}>Remove from cart</Button>
          ) : (
            <Button type="submit" onClick={handleAddProductToCart}>
              Add to cart
            </Button>
          )}
        </div>
      )}
    </li>
  );
}

ProductItemContainer.propTypes = {
  product: propTypes.shape({
    id: propTypes.string.isRequired,
  }),
  isInCart: propTypes.bool,
  isOwnProduct: propTypes.bool,
  handleRemoveProductFromCart: propTypes.func,
  handleAddProductToCart: propTypes.func,
  handleEditProduct: propTypes.func,
};
