import React from 'react';
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
    margin: '80px 0',
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

const Register = () => {
  const classes = useStyles();

  return (
    <section className={classes.login}>
      <form className={classes.loginForm}>
        <Typography variant='h5' align='center'>
          Register
        </Typography>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor='email'>Email</InputLabel>
          <Input
            name='email'
            type='email'
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
            startAdornment={
              <InputAdornment position='start'>
                <LockOpenIcon />
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor='password2'>Confirm Password</InputLabel>
          <Input
            name='password2'
            type='password'
            startAdornment={
              <InputAdornment position='start'>
                <LockOpenIcon />
              </InputAdornment>
            }
          />
        </FormControl>
        <Button variant='contained' color='primary' style={{ width: '100%' }}>
          Submit
        </Button>
      </form>
    </section>
  );
};

export default Register;
