import React, { useMemo } from 'react';
import propTypes from 'prop-types';
import styles from './Input.module.css';

export default function Input({ value, name, type, onChange, onBlur, placeholder = '', error, touched, ...props }) {
  const hasError = useMemo(() => error && touched, [error, touched]);
  return (
    <div>
      <input
        className={styles.input}
        name={name}
        value={value}
        type={type}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        {...props}
      />
      <div>{hasError && <span className={styles.errorText}>{error}</span>}</div>
    </div>
  );
}

Input.propTypes = {
  value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
  type: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  placeholder: propTypes.string,
  error: propTypes.string,
  touched: propTypes.bool,
  props: propTypes.object,
};
