import axios from 'axios';

const setAuthToken = () => {
  const token = localStorage.getItem('token');

  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  }
};

export default setAuthToken;
