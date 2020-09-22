import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../share/buttons/Button/Button';
import BaseProductInfo from '../BaseProductInfo/BaseProductInfo';

import briefcase from '../../images/briefcase.svg';
import styles from './ProductItem.module.css';

import { isAlreadyInCart } from '../../helpers/productHelpers';
import routes from '../../constants/routes';

import { useDispatch, useSelector } from 'react-redux';
import { getProductsIdInCart } from '../../redux/cart/cartSelectors';
import { getIsOwnProduct } from '../../redux/products/productsSelectors';
import { addProductToCart, removeProductFromCart } from '../../redux/cart/cartOperatins';
import { showProductForm } from '../../redux/app/appActions';
import { setEditedProduct } from '../../redux/products/productsActions';

export default function ProductItem({ product }) {
  const productsInCart = useSelector(getProductsIdInCart);
  const dispatch = useDispatch();

  const isInCart = isAlreadyInCart(product.id, productsInCart);

  const handleRemoveProductFromCart = () => dispatch(removeProductFromCart(product.id));
  const handleAddProductToCart = () => dispatch(addProductToCart(product));
  const handleEditProduct = () => {
    dispatch(setEditedProduct(product));
    dispatch(showProductForm(true));
  };

  const isOwnProduct = useSelector(getIsOwnProduct(product));

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

ProductItem.propTypes = {
  product: propTypes.shape({
    id: propTypes.string.isRequired,
  }),
};
