import React from 'react';
import propTypes from 'prop-types';
import styles from './CountButton.module.css';

export default function CountButton({ onClick, children, overStyle }) {
  return (
    <button onClick={onClick} className={overStyle ? overStyle : styles.button}>
      {children}
    </button>
  );
}

CountButton.propTypes = {
  onClick: propTypes.func,
};

CountButton.defaultProps = {
  onClick: () => null,
};
