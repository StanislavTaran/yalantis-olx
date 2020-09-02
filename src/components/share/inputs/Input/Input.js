import React from 'react';
import propTypes from 'prop-types';

export default function Input({ value, type, onChange, placeholder = '' }) {
  return <input value={value} type={type} onChange={onChange} placeholder={placeholder} />;
}

Input.propTypes = {
  value: propTypes.oneOfType([propTypes.number, propTypes.string]).isRequired,
  type: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  placeholder: propTypes.string,
};
