import React, { useRef } from 'react';
import { createPortal } from 'react-dom';
import useOutsideClick from '../../../hooks/useOutsideClick';
import useHideBodyOferflow from '../../../hooks/useHideBodyOferflow';
import Button from '../../share/buttons/Button/Button';

import styles from './SidePortal.module.css';

export default function SidePortal({ onClose, children }) {
  useHideBodyOferflow();

  const childRef = useRef();
  useOutsideClick(childRef, () => {
    onClose();
  });

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
