import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsShowProductForm } from '../../redux/app/appSelectors';
import { showProductForm } from '../../redux/app/appActions';
import { getEditedProduct } from '../../redux/products/productsSelectors';
import { postProductRequest, patchProductRequest } from '../../redux/products/productsActions';
import { productsOrigins } from '../../constants/productsFilters';

import AddProductForm from './AddProductForm';

function AddProductFormContainer({ origins }) {
  const dispatch = useDispatch();

  const editedProduct = useSelector(getEditedProduct);
  const isEdit = !!Object.keys(editedProduct).length;

  const isShowProductForm = useSelector(getIsShowProductForm);
  const handleOpenProductForm = () => dispatch(showProductForm(!isShowProductForm));

  const handleSubmit = (productId, values) => {
    isEdit ? dispatch(patchProductRequest({ productId, values })) : dispatch(postProductRequest(values));
  };

  const initialState = {
    name: isEdit ? editedProduct.name : '',
    price: isEdit ? editedProduct.price : 0,
    origin: isEdit ? editedProduct.origin : productsOrigins[0],
  };

  return (
    <AddProductForm
      initialState={initialState}
      origins={origins}
      handleSubmit={handleSubmit}
      isEdit={isEdit}
      editedProduct={editedProduct}
      handleOpenProductForm={handleOpenProductForm}
    />
  );
}

export default AddProductFormContainer;
