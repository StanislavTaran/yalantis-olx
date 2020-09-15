import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { resetFilters } from '../redux/filters/filtersActions';

const useResetFilters = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    return () => {
      history.listen(location => {
        const { state } = location;

        state && state.resetFilters && dispatch(resetFilters());
      });
    };
  }, [history, dispatch]);
};

export default useResetFilters;
