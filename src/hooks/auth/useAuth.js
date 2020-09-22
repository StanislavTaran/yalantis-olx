import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { logInSucces, logInRequest, logInError } from '../../redux/auth/authActions';

const { REACT_APP_API_TOKEN } = process.env;

const user = {
  email: 'taran-dev@gmail.com',
  token: REACT_APP_API_TOKEN,
};

export const useAuth = () => {
  const dispatch = useDispatch();

  const authAsync = useCallback(async () => {
    try {
      dispatch(logInRequest());
      dispatch(logInSucces(user));
    } catch (e) {
      dispatch(logInError(e));
    }
  }, [dispatch]);

  return { authAsync };
};
