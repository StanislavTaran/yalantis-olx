import React from 'react';
import propTypes from 'prop-types';
import styles from './Button.module.css';

export default function CountButton({ onClick, type, children }) {
  let buttonStyle;

  switch (type) {
    case 'submit':
      buttonStyle = styles.buttonSubmit;
      break;
    case 'cancel':
      buttonStyle = styles.buttonCancel;
      break;
    default:
      buttonStyle = styles.button;
  }

  return (
    <button onClick={onClick} className={buttonStyle}>
      {children}
    </button>
  );
}

CountButton.propTypes = {
  onClick: propTypes.func,
  type: propTypes.oneOf(['submit', 'cancel']),
};
