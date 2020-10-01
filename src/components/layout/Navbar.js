import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Navbar = () => {
  const isAuthenticated = false;

  return (
    <nav style={{ marginBottom: '80px' }}>
      <AppBar>
        <ToolBar className='toolbar'>
          <Typography variant='h6'>Tasks App</Typography>
          <div className='toolbar__buttons'>
            {isAuthenticated ? (
              <React.Fragment>
                <Button color='inherit'>Logout</Button>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Button color='primary'>
                  <Link to='/login'>Login</Link>
                </Button>
                <Button color='primary'>
                  <Link to='/register'>Register</Link>
                </Button>
              </React.Fragment>
            )}
          </div>
        </ToolBar>
      </AppBar>
    </nav>
  );
};

export default Navbar;
