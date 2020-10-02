import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTasks } from '../../actions/tasksActions';
import TaskItem from './TaskItem';
// Material UI
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const FinishedTasks = ({ getTasks, tasks: { finishedTasks } }) => {
  useEffect(() => {
    getTasks('finished');
    // eslint-disable-next-line
  }, []);

  return (
    <Card>
      <CardContent>
        <Typography variant='h6' align='center'>
          Finished
        </Typography>
        <List>
          {finishedTasks.length !== 0 ? (
            finishedTasks.map(task => <TaskItem key={task.id} task={task} />)
          ) : (
            <ListItem>
              <ListItemText primary='Add Tasks' />
            </ListItem>
          )}
        </List>
      </CardContent>
    </Card>
  );
};

const mapStateToProps = state => ({
  tasks: state.tasks
});

FinishedTasks.propTypes = {
  tasks: PropTypes.object.isRequired,
  getTasks: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { getTasks })(FinishedTasks);
