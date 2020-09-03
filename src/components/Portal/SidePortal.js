import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import useOutsideClick from '../../hooks/useOutsideClick';
import Button from '../share/buttons/Button/Button';

import styles from './SidePortal.module.css';

export default function SidePortal({ onClose, children }) {
  const childRef = useRef();

  useOutsideClick(childRef, () => {
    onClose();
  });

  useEffect(() => {
    document.body.className = 'overflow-hidden';
    return () => {
      document.body.className = '';
    };
  }, []);

  return createPortal(
    <div className={styles.container}>
      <Button onClick={onClose} overStyle={styles.closePortalButton} />
      <div className={styles.overlay}>
        <div ref={childRef} className={styles.childrenContainer}>
          {children}
        </div>
      </div>
    </div>,
    document.getElementById('side-portal'),
  );
}
