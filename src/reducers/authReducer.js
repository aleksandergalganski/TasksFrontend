import {
  LOGIN,
  LOGOUT,
  REGISTER,
  SET_AUTH_ERROR,
  CLEAR_AUTH_ERROR,
  GET_USER,
  SET_LOADING
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  user: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
        loading: false
      };
    case REGISTER:
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
        loading: false
      };
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: false
      };
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    case SET_AUTH_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };
    case CLEAR_AUTH_ERROR:
      return {
        ...state,
        error: null
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};
