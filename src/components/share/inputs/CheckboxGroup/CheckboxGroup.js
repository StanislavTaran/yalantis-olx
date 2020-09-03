import React from 'react';
import propTypes from 'prop-types';
import Checkboxes from 'react-checkbox-group';
import styles from './CheckboxGroup.module.css';

export default function CheckboxGroup({ name, value, onChange, items }) {
  return (
    <Checkboxes name={name} value={value} onChange={onChange}>
      {Checkbox => (
        <>
          {items.map(item => (
            <label key={item.value} className={styles.label}>
              <Checkbox value={item.value} /> {item.displayName}
            </label>
          ))}
        </>
      )}
    </Checkboxes>
  );
}

CheckboxGroup.propTypes = {
  name: propTypes.string.isRequired,
  value: propTypes.arrayOf(propTypes.string).isRequired,
  onChange: propTypes.string.isRequired,
  items: propTypes.arrayOf(propTypes.string).isRequired,
};
