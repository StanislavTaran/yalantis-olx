import React from 'react';
import propTypes from 'prop-types';
import styles from './OriginLabel.module.css';

const mapStyle = origin => {
  let styleOrigin;
  switch (origin) {
    case 'asia':
      styleOrigin = styles.styleOriginAsia;
      break;
    case 'europe':
      styleOrigin = styles.styleOriginEurope;
      break;
    case 'usa':
      styleOrigin = styles.styleOriginUsa;
      break;
    case 'africa':
      styleOrigin = styles.styleOriginAfrica;
      break;
    default:
      styleOrigin = styles.styleOrigin;
  }

  return styleOrigin;
};

export default function OriginLabel({ origin }) {
  return (
    <p>
      <span className={mapStyle(origin)}>{origin}</span>
    </p>
  );
}

OriginLabel.propTypes = {
  origin: propTypes.string.isRequired,
};
