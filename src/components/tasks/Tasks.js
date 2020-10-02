import React, { useEffect, Fragment } from 'react';
import { connect } from 'react-redux';
import { clearSnackBar } from '../../actions/tasksActions';
import FinishedTasks from './FinishedTasks';
import RunningTasks from './RunningTasks';
import TodoTasks from './TodoTasks';
import Spinner from '../layout/Spinner';
// Material UI
import Grid from '@material-ui/core/Grid';
import Snackbar from '@material-ui/core/Snackbar';

const Tasks = ({ tasks: { snackBarMessage, loading }, clearSnackBar }) => {
  useEffect(() => {
    if (snackBarMessage) {
      setTimeout(() => clearSnackBar(), 1000);
    }
    // eslint-disable-next-line
  }, [snackBarMessage]);

  const snackBarSpacing = {
    vertical: 'bottom',
    horizontal: 'center'
  };

  return (
    <Fragment>
      {loading && <Spinner />}
      <section style={{ padding: '20px' }}>
        <Grid container spacing={3} justify='center'>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <TodoTasks />
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <RunningTasks />
          </Grid>
          <Grid item lg={4} md={6} sm={12} xs={12}>
            <FinishedTasks />
          </Grid>
        </Grid>
        {snackBarMessage && (
          <Snackbar
            anchorOrigin={snackBarSpacing}
            open={true}
            message={snackBarMessage}
          />
        )}
      </section>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  tasks: state.tasks
});

export default connect(mapStateToProps, { clearSnackBar })(Tasks);
