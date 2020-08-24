import React from 'react';
import propTypes from 'prop-types';
import { getDateString } from '../../../../helpers/dateOperations';
import styles from './DateLabel.module.css';

export default function DateLabel({ text, iso }) {
  return (
    <p className={styles.cursive}>
      {text}: {getDateString(iso)}
    </p>
  );
}

DateLabel.propTypes = {
  text: propTypes.string.isRequired,
  iso: propTypes.string.isRequired,
};
