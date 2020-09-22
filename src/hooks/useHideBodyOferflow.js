import { useEffect } from 'react';

const useOutsideClick = () => {
  useEffect(() => {
    document.body.className = 'overflow-hidden';

    return () => {
      document.body.className = '';
    };
  });
};

export default useOutsideClick;
