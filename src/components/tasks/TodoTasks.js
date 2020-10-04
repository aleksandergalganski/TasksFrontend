import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTasks, addTask } from '../../actions/tasksActions';
import AddTaskDialog from './AddTaskDialog';
import TaskItem from './TaskItem';
// Material UI
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const TodoTasks = ({ getTasks, addTask, tasks: { todoTasks } }) => {
  useEffect(() => {
    getTasks('todo');
    // eslint-disable-next-line
  }, []);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
    setOpen(false);
    if (value) {
      addTask('todo', value);
    }
  };

  return (
    <Fragment>
      <Card>
        <CardContent>
          <Typography variant='h6' align='center'>
            Todo
          </Typography>
          <List>
            {todoTasks.length !== 0 ? (
              todoTasks.map(task => <TaskItem key={task.id} task={task} />)
            ) : (
              <ListItem>
                <ListItemText primary='Add Tasks' />
              </ListItem>
            )}
            <ListItem>
              <ListItemIcon>
                <Fab color='primary' size='small' onClick={handleOpen}>
                  <AddIcon />
                </Fab>
              </ListItemIcon>
              <ListItemText primary='Add ToDo Task' />
            </ListItem>
          </List>
        </CardContent>
      </Card>
      <AddTaskDialog open={open} onClose={handleClose} />
    </Fragment>
  );
};

const mapStateToProps = state => ({
  tasks: state.tasks
});

TodoTasks.propTypes = {
  tasks: PropTypes.object.isRequired,
  getTasks: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired
};

export default connect(mapStateToProps, { getTasks, addTask })(TodoTasks);
