import React from 'react';
import styles from './Loader.module.css';

import ReactLoader from 'react-loader-spinner';

export default function Loader() {
  return (
    <div className={styles.loaderContainer}>
      <ReactLoader type="Circles" color="#457b9d" height={100} width={100} />
    </div>
  );
}
