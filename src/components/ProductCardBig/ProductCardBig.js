import React from 'react';
import propTypes from 'prop-types';
import styles from './ProductCardBig.module.css';
import BaseProductInfo from '../BaseProductInfo/BaseProductInfo';
import CountButton from '../share/buttons/CountButton/CountButton';
import SimpleLabel from '../share/labels/SimpleLabel/SimpleLabel';
import Button from '../share/buttons/Button/Button';

export default function ProductCardBig({
  product,
  children,
  isInCart,
  quantity,
  handleProductIncrement,
  handleProductDecrement,
  handleAddProductToCart,
  handleRemoveProductFromCart,
  handleEditClick,
  isOwnProduct,
  withCountButtons,
  totalPrice,
}) {
  return (
    <div className={styles.container}>
      <div>
        <BaseProductInfo product={product} />
        {children}

        {!isOwnProduct ? (
          <div>
            {isInCart ? (
              <>
                {withCountButtons ? (
                  <div>
                    Quantity in cart : <CountButton onClick={handleProductDecrement}>-</CountButton> {quantity}{' '}
                    <CountButton onClick={handleProductIncrement}>+</CountButton>
                    <SimpleLabel text={`Price for ${quantity} units : ${totalPrice}`} />
                  </div>
                ) : null}

                <Button onClick={handleRemoveProductFromCart}>Remove from cart</Button>
              </>
            ) : (
              <Button onClick={handleAddProductToCart} type="submit">
                Add to cart
              </Button>
            )}
          </div>
        ) : (
          <Button onClick={handleEditClick}>Edit Product</Button>
        )}
      </div>
    </div>
  );
}

ProductCardBig.propTypes = {
  product: propTypes.shape({
    id: propTypes.string.isRequired,
  }).isRequired,
  withCountButtons: propTypes.bool,
  children: propTypes.node,
  isInCart: propTypes.bool,
  quantity: propTypes.number.isRequired,
  isOwnProduct: propTypes.bool.isRequired,
  handleProductIncrement: propTypes.func.isRequired,
  handleProductDecrement: propTypes.func.isRequired,
  handleAddProductToCart: propTypes.func.isRequired,
  handleRemoveProductFromCart: propTypes.func.isRequired,
  handleEditClick: propTypes.func.isRequired,
  totalPrice: propTypes.string,
};

ProductCardBig.defaultProps = {
  withCountButtons: false,
  isInCart: false,
};
