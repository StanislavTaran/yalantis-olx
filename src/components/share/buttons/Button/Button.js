import React from 'react';
import propTypes from 'prop-types';
import styles from './Button.module.css';

export default function Button({ onClick, type, children, disabled, overStyle }) {
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
    <button onClick={onClick} className={overStyle ? overStyle : buttonStyle} disabled={disabled}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: propTypes.func,
  type: propTypes.oneOf(['submit', 'cancel']),
  disabled: propTypes.bool,
};

Button.defaultProps = {
  disabled: false,
};
