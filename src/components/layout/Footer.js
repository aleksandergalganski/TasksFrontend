import React from 'react';
import { Typography } from '@material-ui/core';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__icons'>
        <div className='footer__icon'>
          <i className='fab fa-facebook-f'></i>
        </div>
        <div className='footer__icon'>
          <i className='fab fa-twitter'></i>
        </div>
        <div className='footer__icon'>
          <i className='fab fa-instagram'></i>
        </div>
      </div>
      <Typography variant='body1' className='footer__text'>
        &copy; 2020 TasksApp
      </Typography>
    </footer>
  );
};

export default Footer;
