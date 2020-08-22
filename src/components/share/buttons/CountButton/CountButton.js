import React from 'react';
import propTypes from 'prop-types';
import styles from './CountButton.module.css';

export default function CountButton({ onClick, type }) {
  return (
    <button onClick={onClick} className={styles.button}>
      {type === 'decrement' ? '-' : '+'}
    </button>
  );
}

CountButton.propTypes = {
  onClick: propTypes.func.isRequired,
  type: propTypes.oneOf(['increment', 'decrement']),
};

CountButton.defaultProps = {
  type: 'increment',
};
