import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { login, setError } from '../../actions/authActions';
import Alert from '../layout/Alert';
import Spinner from '../layout/Spinner';
// Material UI
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { makeStyles } from '@material-ui/core/styles';
import { InputAdornment, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  login: {
    display: 'flex',
    justifyContent: 'center'
  },
  loginForm: {
    display: 'flex',
    width: '400px',
    justifyContent: 'center',
    flexDirection: 'column'
  },
  formControl: {
    margin: theme.spacing(2, 0, 2, 0),
    width: '100%'
  }
}));

const Login = props => {
  const classes = useStyles();

  const { auth, history, login, setError } = props;

  useEffect(() => {
    if (auth.isAuthenticated) {
      history.push('/tasks');
    }
    // eslint-disable-next-line
  }, [auth.isAuthenticated]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    if (email === '' || password === '') {
      setError('Email and password are empty');
    } else {
      login(email, password);
    }
  };

  return (
    <Fragment>
      {auth.loading && <Spinner />}
      <section className={classes.login}>
        <form className={classes.loginForm} onSubmit={onSubmit}>
          {auth.error && <Alert severity='error'>{auth.error}</Alert>}
          <Typography variant='h5' align='center'>
            Login
          </Typography>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor='email'>Email</InputLabel>
            <Input
              name='email'
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              startAdornment={
                <InputAdornment position='start'>
                  <EmailIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor='password'>Password</InputLabel>
            <Input
              name='password'
              type='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              startAdornment={
                <InputAdornment position='start'>
                  <LockOpenIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <Button
            variant='contained'
            type='submit'
            color='primary'
            style={{ width: '100%' }}
          >
            Submit
          </Button>
        </form>
      </section>
    </Fragment>
  );
};

Login.propTypes = {
  auth: PropTypes.object.isRequired,
  login: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { login, setError })(Login);
