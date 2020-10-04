import React from 'react';
import { isAlreadyInCart } from '../../helpers/productHelpers';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsIdInCart } from '../../redux/cart/cartSelectors';
import { getIsOwnProduct } from '../../redux/products/productsSelectors';
import { addToCart, removeFromCart } from '../../redux/cart/cartActions';
import { showProductForm } from '../../redux/app/appActions';
import { setEditedProduct } from '../../redux/products/productsActions';
import ProductItem from './ProductItem';

export default function ProductItemContainer({ product }) {
  const productsInCart = useSelector(getProductsIdInCart);
  const dispatch = useDispatch();

  const isInCart = isAlreadyInCart(product.id, productsInCart);

  const handleRemoveProductFromCart = () => dispatch(removeFromCart(product.id));
  const handleAddProductToCart = () => dispatch(addToCart(product));
  const handleEditProduct = () => {
    dispatch(setEditedProduct(product));
    dispatch(showProductForm(true));
  };

  const isOwnProduct = useSelector(getIsOwnProduct(product));

  return (
    <ProductItem
      product={product}
      isInCart={isInCart}
      handleRemoveProductFromCart={handleRemoveProductFromCart}
      handleAddProductToCart={handleAddProductToCart}
      handleEditProduct={handleEditProduct}
      isOwnProduct={isOwnProduct}
    />
  );
}
