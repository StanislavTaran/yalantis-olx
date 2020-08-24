import React from 'react';
import propTypes from 'prop-types';

export default function SimpleLabel({ text, value, overStyle }) {
  return <p className={overStyle}>{text ? `${text} : ${value}` : { text }}</p>;
}

SimpleLabel.propTypes = {
  text: propTypes.string.isRequired,
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
  overStyle: propTypes.objectOf(propTypes.string),
};

SimpleLabel.defaultProps = {
  value: '',
};
