import React from 'react';
import propTypes from 'prop-types';
import styles from './Button.module.css';

const mapStyle = (type, disabled) => {
  let buttonStyle;

  if (disabled) {
    return (buttonStyle = styles.buttonDisabled);
  }

  switch (type) {
    case 'submit':
      buttonStyle = styles.buttonSubmit;
      break;
    case 'cancel':
      buttonStyle = styles.buttonCancel;
      break;
    case 'edit':
      buttonStyle = styles.buttonEdit;
      break;
    default:
      buttonStyle = styles.button;
  }

  return buttonStyle;
};

export default function Button({ onClick, actionType, type, children, disabled, overStyle }) {
  return (
    <button
      type={actionType}
      onClick={onClick}
      className={overStyle ? overStyle : mapStyle(type, disabled)}
      disabled={disabled}
    >
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
