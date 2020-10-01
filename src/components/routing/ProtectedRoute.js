import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const ProtectedRoute = props => {
  const { component: Component, auth, ...rest } = props;

  return (
    <Route
      {...rest}
      render={props =>
        auth.isAuthenticated ? <Component {...props} /> : <Redirect to='/login' />
      }
    />
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, {})(ProtectedRoute);
