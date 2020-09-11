import React from 'react';
import propTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import addProductSchema from '../../helpers/schemas/addProductSchema';

function AddProductForm() {
  // TODO remove this
  const origins = [
    { value: 'africa', displayName: 'Africa' },
    { value: 'asia', displayName: 'Asia' },
  ];

  return (
    <div>
      <h2>ADD YOUR OWN PRODUCT</h2>
      <Formik
        initialValues={{ name: '', price: 0, origin: origins[0] }}
        validationSchema={addProductSchema}
        onSubmit={values => {
          // same shape as initial values
          console.log(values);
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <Field type="text" name="name" />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <Field type="number" name="price" />
            {errors.price && touched.price ? <div>{errors.price}</div> : null}

            <Field comonent="select" name="origin">
              {origins.map(origin => (
                <option key={origin.value} value={origin.value}>
                  {origin.displayName}
                </option>
              ))}
            </Field>
            {errors.origin && touched.origin ? <div>{errors.origin}</div> : null}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddProductForm;

AddProductForm.propTypes = {
  origins: propTypes.arrayOf(propTypes.string).isRequired,
};
