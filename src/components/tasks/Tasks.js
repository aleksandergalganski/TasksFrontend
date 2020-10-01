import React, { useState } from 'react';
import FinishedTasks from './FinishedTasks';
import RunningTasks from './RunningTasks';
import Grid from '@material-ui/core/Grid';
import TodoTasks from './TodoTasks';

const Tasks = () => {
  return (
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
    </section>
  );
};

export default Tasks;
