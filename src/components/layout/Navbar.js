import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/authActions';
import { clearTasks } from '../../actions/tasksActions';
// Material UI
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';

const Navbar = ({ auth: { isAuthenticated }, logout, clearTasks }) => {
  const onLogout = () => {
    logout();
    clearTasks();
  };

  return (
    <nav style={{ marginBottom: '80px' }}>
      <AppBar>
        <ToolBar className='toolbar'>
          <Typography variant='h6'>Tasks App</Typography>
          <div className='toolbar__buttons'>
            {isAuthenticated ? (
              <Fragment>
                <AccountCircle />
                <Button color='inherit' onClick={onLogout}>
                  Logout
                </Button>
              </Fragment>
            ) : (
              <Fragment>
                <Button color='primary'>
                  <Link to='/login'>Login</Link>
                </Button>
                <Button color='primary'>
                  <Link to='/register'>Register</Link>
                </Button>
              </Fragment>
            )}
          </div>
        </ToolBar>
      </AppBar>
    </nav>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

Navbar.propTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { logout, clearTasks })(Navbar);
