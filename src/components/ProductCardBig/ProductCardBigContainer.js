import React from 'react';
import { isAlreadyInCart, reducerForPrice } from '../../helpers/productHelpers';
import currencyFormatter from '../../helpers/currencyFormatter';
import { useSelector, useDispatch } from 'react-redux';
import { getProductsIdInCart, getCart } from '../../redux/cart/cartSelectors';
import { getIsOwnProduct } from '../../redux/products/productsSelectors';
import {
  addToCart,
  removeFromCart,
  decrementProductQuantity,
  incrementProductQuantity,
} from '../../redux/cart/cartActions';
import { setEditedProduct } from '../../redux/products/productsActions';
import { showProductForm } from '../../redux/app/appActions';
import ProductCardBig from './ProductCardBig';

const mapPriceToCart = product => {
  return currencyFormatter(reducerForPrice(0, product));
};

export default function ProductCardBigContainer({ product, withCountButtons, children }) {
  const productsInCart = useSelector(getProductsIdInCart);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  const isInCart = isAlreadyInCart(product.id, productsInCart);
  const quantity = (cart[product.id] && cart[product.id].quantity) || 0;

  const handleProductIncrement = () => dispatch(incrementProductQuantity(product.id));
  const handleProductDecrement = () => dispatch(decrementProductQuantity(product.id));
  const handleAddProductToCart = () => dispatch(addToCart(product));
  const handleRemoveProductFromCart = () => dispatch(removeFromCart(product.id));

  const handleEditClick = () => {
    dispatch(setEditedProduct(product));
    dispatch(showProductForm(true));
  };

  const isOwnProduct = useSelector(getIsOwnProduct(product));
  const totalPrice = cart[product.id] && mapPriceToCart(cart[product.id]);

  return (
    <ProductCardBig
      product={product}
      isInCart={isInCart}
      quantity={quantity}
      handleProductIncrement={handleProductIncrement}
      handleProductDecrement={handleProductDecrement}
      handleAddProductToCart={handleAddProductToCart}
      handleRemoveProductFromCart={handleRemoveProductFromCart}
      handleEditClick={handleEditClick}
      isOwnProduct={isOwnProduct}
      totalPrice={totalPrice}
      withCountButtons={withCountButtons}
      children={children}
    />
  );
}
