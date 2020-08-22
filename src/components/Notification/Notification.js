import React from 'react';
import propTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import styles from './Notification.module.css';
import slideTransition from '../../styles/transitions/slide-reverse.module.css';

export default function Notification({ message, type, inProp }) {
  let mainStyle;
  switch (type) {
    case 'warning':
      mainStyle = styles.warning;
      break;
    case 'succes':
      mainStyle = styles.succes;
      break;
    default:
      mainStyle = styles.notification;
  }
  return (
    <CSSTransition in={inProp} timeout={500} classNames={slideTransition} unmountOnExit>
      <div className={mainStyle}>
        <h3 className={styles.message}>{message}</h3>
      </div>
    </CSSTransition>
  );
}

Notification.propTypes = {
  message: propTypes.string.isRequired,
  type: propTypes.oneOf(['warning', 'succes']),
};
