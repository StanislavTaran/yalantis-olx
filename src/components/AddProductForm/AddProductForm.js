import React from 'react';
import propTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import Input from '../share/inputs/Input/Input';
import Button from '../share/buttons/Button/Button';
import addProductSchema from '../../helpers/schemas/addProductSchema';
import styles from './AddProductForm.module.css';

// TODO: При ошибке после сабмита формы - ошибка должна отображаться.

function AddProductForm({ origins, handleSubmit }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.formTitile}>ADD YOUR OWN PRODUCT</h2>
      <Formik
        initialValues={{ name: '', price: 0, origin: origins[0] }}
        validationSchema={addProductSchema}
        onSubmit={values => {
          handleSubmit(values);
        }}
      >
        {({ errors, touched, values, isSubmitting, handleChange, handleBlur }) => (
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
            <Button actionType="submit" type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddProductForm;

AddProductForm.propTypes = {
  origins: propTypes.arrayOf(propTypes.shape({ value: propTypes.string, displayName: propTypes.string })).isRequired,
};
