import React from 'react';
import propTypes from 'prop-types';
import styles from './Select.module.css';

export default function Select({ options, onChange }) {
  return (
    <select onChange={onChange} className={styles.select}>
      {options.map(item => (
        <option key={item}>{item}</option>
      ))}
    </select>
  );
}

Select.propTypes = {
  options: propTypes.arrayOf(propTypes.oneOfType([propTypes.string, propTypes.number])).isRequired,
  onChange: propTypes.func.isRequired,
};
