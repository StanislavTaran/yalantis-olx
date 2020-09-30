import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as filtersActions from '../redux/filters/filtersActions';

const useResetFilters = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const resetFilters = () => {
    return history.listen(location => {
      const { state } = location;

      if (state && state.resetFilters) {
        dispatch(filtersActions.resetFilters());
      }
    });
  };

  return {
    resetFilters,
  };
};

export default useResetFilters;
