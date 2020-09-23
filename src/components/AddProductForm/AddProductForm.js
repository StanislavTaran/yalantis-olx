import React from 'react';
import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import Input from '../share/inputs/Input/Input';
import Button from '../share/buttons/Button/Button';
import Modal from '../Portal/Modal/Modal';
import { getIsShowProductForm } from '../../redux/app/appSelectors';
import { showProductForm } from '../../redux/app/appActions';
import { getEditedProduct } from '../../redux/products/productsSelectors';
import { postProductRequest, patchProductRequest } from '../../redux/products/productsActions';
import addProductSchema from '../../helpers/schemas/addProductSchema';
import { productsOrigins } from '../../constants/productsFilters';

import styles from './AddProductForm.module.css';

function AddProductForm({ origins }) {
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
    <Formik
      initialValues={initialState}
      validationSchema={addProductSchema}
      onSubmit={values => {
        handleSubmit(editedProduct.id, values);
      }}
    >
      {({ errors, touched, values, isSubmitting, handleChange, handleBlur, handleReset }) => (
        <Modal onClose={handleOpenProductForm}>
          <div className={styles.container}>
            <h2 className={styles.formTitile}>{`${isEdit ? 'EDIT' : 'ADD'} YOUR  PRODUCT`}</h2>
            <Form>
              <label htmlFor="name">
                Name* :
                <Input
                  disabled={isSubmitting}
                  type="text"
                  name="name"
                  value={values.name}
                  error={errors.name}
                  touched={touched.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </label>
              <label htmlFor="price">
                Price* :
                <Input
                  disabled={isSubmitting}
                  type="number"
                  name="price"
                  value={values.price}
                  error={errors.price}
                  touched={touched.price}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </label>
              Origin* :{' '}
              <label htmlFor="origin">
                <Field as="select" name="origin" disabled={isSubmitting} className={styles.select}>
                  {origins.map(origin => (
                    <option key={origin.value} value={origin.value}>
                      {origin.displayName}
                    </option>
                  ))}
                </Field>
                {errors.origin && touched.origin ? <div className={styles.errorText}>{errors.origin}</div> : null}
              </label>
              <Button actionType="button" disabled={isSubmitting} onClick={handleReset}>
                Сancel changes
              </Button>
              <Button actionType="submit" type="submit" disabled={isSubmitting}>
                Submit
              </Button>
            </Form>
          </div>
        </Modal>
      )}
    </Formik>
  );
}

export default AddProductForm;

AddProductForm.propTypes = {
  origins: propTypes.arrayOf(propTypes.shape({ value: propTypes.string, displayName: propTypes.string })).isRequired,
};
