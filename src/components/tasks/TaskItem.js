import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeTaskType, deleteTask } from '../../actions/tasksActions';
import Moment from 'react-moment';
// Material UI
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const TaskItem = ({ task, deleteTask, changeTaskType }) => {
  const onChangeType = () => {
    changeTaskType(task.id, task.type);
  };

  const onDeleteTask = () => {
    deleteTask(task.id, task.type);
  };

  return (
    <React.Fragment>
      <ListItem>
        {task.type !== 'finished' && (
          <ListItemIcon>
            <Checkbox edge='start' disableRipple color='primary' onClick={onChangeType} />
          </ListItemIcon>
        )}
        <ListItemText
          primary={task.name}
          secondary={<Moment format='YYYY/MM/DD'>{task.createdAt}</Moment>}
        />
        <ListItemSecondaryAction>
          <IconButton edge='end' aria-label='delete' onClick={onDeleteTask}>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </React.Fragment>
  );
};

TaskItem.propTypes = {
  task: PropTypes.object.isRequired
};

export default connect(null, { deleteTask, changeTaskType })(TaskItem);
