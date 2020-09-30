import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Navbar = () => {
  return (
    <nav>
      <AppBar>
        <ToolBar className='toolbar'>
          <Typography variant='h6'>Tasks App</Typography>
          <div className='toolbar__buttons'>
            <Button color='inherit'>Login</Button>
            <Button color='inherit'>Register</Button>
          </div>
        </ToolBar>
      </AppBar>
    </nav>
  );
};

export default Navbar;
