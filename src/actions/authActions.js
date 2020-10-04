import axios from 'axios';
import {
  LOGIN,
  LOGOUT,
  REGISTER,
  SET_AUTH_ERROR,
  SET_LOADING,
  GET_USER,
  CLEAR_AUTH_ERROR
} from './types';

export const login = (email, password) => async dispatch => {
  try {
    dispatch({ type: SET_LOADING });
    const loginData = { email, password };
    const res = await axios.post(
      `${process.env.REACT_APP_API_URI}/api/v1/auth/login`,
      loginData,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    dispatch({ type: LOGIN, payload: res.data.token });
  } catch (err) {
    errorHandler(dispatch, err.response.data.message);
  }
};

export const register = (email, password) => async dispatch => {
  try {
    dispatch({ type: SET_LOADING });
    const registerData = { email, password };
    const res = await axios.post(
      `${process.env.REACT_APP_API_URI}/api/v1/auth/register`,
      registerData,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    dispatch({ type: REGISTER, payload: res.data.token });
  } catch (err) {
    errorHandler(dispatch, err.response.data.message);
  }
};

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};

export const getUser = () => async (dispatch, state) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URI}/api/v1/auth/whoami`, {
      headers: {
        'x-auth-token': state().auth.token
      }
    });

    dispatch({ type: GET_USER, payload: res.data.data });
  } catch (err) {}
};

export const setError = message => async dispatch => {
  errorHandler(dispatch, message);
};

const errorHandler = (dispatch, message) => {
  dispatch({ type: SET_AUTH_ERROR, payload: message });
  setTimeout(() => dispatch({ type: CLEAR_AUTH_ERROR }), 2000);
};
