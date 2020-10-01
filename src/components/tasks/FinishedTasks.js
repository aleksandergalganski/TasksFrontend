import React from 'react';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import FinishedTask from './FinishedTask';

const FinishedTasks = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant='h6' align='center'>
          Finished
        </Typography>
        <List>
          <FinishedTask />
          <FinishedTask />
          <FinishedTask />
          <FinishedTask />
        </List>
      </CardContent>
    </Card>
  );
};

export default FinishedTasks;
