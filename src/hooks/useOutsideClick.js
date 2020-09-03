import { useEffect } from 'react';

const useOutsideClick = (ref, callback) => {
  const handleClick = e => {
    console.log();

    if (ref.current === e.path[0]) {
      callback();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};

export default useOutsideClick;
