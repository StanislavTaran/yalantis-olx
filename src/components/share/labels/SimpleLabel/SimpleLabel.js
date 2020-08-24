import React from 'react';
import propTypes from 'prop-types';

export default function SimpleLabel({ text, value }) {
  return <p>{text ? `${text} : ${value}` : { text }}</p>;
}

SimpleLabel.propTypes = {
  text: propTypes.string.isRequired,
  value: propTypes.oneOfType([propTypes.string, propTypes.number]),
};

SimpleLabel.defaultProps = {
  value: '',
};
