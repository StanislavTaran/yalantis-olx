import React from 'react';
import propTypes from 'prop-types';
import { Field, Form, Formik } from 'formik';
import addProductSchema from '../../helpers/schemas/addProductSchema';
import Modal from '../Portal/Modal/Modal';
import Input from '../share/inputs/Input/Input';
import Button from '../share/buttons/Button/Button';
import styles from './AddProductForm.module.css';

export default function AddProductForm({
  initialState,
  origins,
  handleSubmit,
  isEdit,
  editedProduct,
  handleOpenProductForm,
}) {
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
            <h2 className={styles.formTitle}>{`${isEdit ? 'EDIT' : 'ADD'} YOUR  PRODUCT`}</h2>
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

AddProductForm.propTypes = {
  origins: propTypes.arrayOf(propTypes.shape({ value: propTypes.string, displayName: propTypes.string })).isRequired,
  initialState: propTypes.shape({
    name: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    origin: propTypes.string.isRequired,
  }).isRequired,
  handleSubmit: propTypes.func.isRequired,
  isEdit: propTypes.bool.isRequired,
  editedProduct: propTypes.shape({
    name: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    origin: propTypes.string.isRequired,
  }),
  handleOpenProductForm: propTypes.func.isRequired,
};
