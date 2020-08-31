import React from 'react';
import propTypes from 'prop-types';

export default function SimpleLabel({ text, overStyle }) {
  return <p className={overStyle}>{text}</p>;
}

SimpleLabel.propTypes = {
  text: propTypes.string.isRequired,
  overStyle: propTypes.string,
};
