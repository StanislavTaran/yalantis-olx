import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { logInSucces, logInRequest, logInError } from '../../redux/auth/authActions';

const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmdWxsTmFtZSI6IlN0YW5pc2xhdiBUYXJhbiIsImlhdCI6MTU5OTA3NDgxNywiZXhwIjoxNjA0MjU4ODE3fQ.hJZUBIB4BczjPDcDpYBOy6nQSO_DjXILhTgEXRmTcMg';

const user = {
  email: 'taran-dev@gmail.com',
  token: token,
};

export const useAuth = () => {
  const dispatch = useDispatch();

  const authAsync = useCallback(async () => {
    try {
      dispatch(logInRequest());
      localStorage.setItem('token', token);
      dispatch(logInSucces(user));
    } catch (e) {
      dispatch(logInError(e));
    }
  }, [dispatch]);

  return { authAsync };
};
