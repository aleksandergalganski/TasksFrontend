import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const Spinner = () => {
  return (
    <div style={spinnerStyle}>
      <CircularProgress style={{ margin: '16px 0' }} disableShrink />
    </div>
  );
};

const spinnerStyle = {
  display: 'flex',
  justifyContent: 'center'
};

export default Spinner;
