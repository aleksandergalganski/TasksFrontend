import axios from 'axios';
import { LOGIN, LOGOUT, REGISTER, AUTH_ERROR, SET_LOADING, GET_USER } from './types';

export const login = (email, password) => async dispatch => {
  try {
    const loginData = { email, password };
    setLoading();
    const res = axios.post('http://localhost:5000/api/v1/auth/login', loginData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    dispatch({ type: LOGIN, payload: res.token });
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: err.response.statusText });
  }
};

export const register = (email, password) => async dispatch => {
  try {
    const registerData = { email, password };
    setLoading();
    const res = axios.post('http://localhost:5000/api/v1/auth/register', registerData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });

    dispatch({ type: REGISTER, payload: res.token });
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: err.response.statusText });
  }
};

export const logout = () => dispatch => dispatch({ type: LOGOUT });

export const getUser = () => async dispatch => {
  try {
    setLoading();
    const res = axios.post('http://localhost:5000/api/v1/auth/whoami');

    dispatch({ type: GET_USER, payload: res.data });
  } catch (err) {
    dispatch({ type: AUTH_ERROR, payload: err.response.statusText });
  }
};

const setLoading = () => dispatch => dispatch({ type: SET_LOADING });
