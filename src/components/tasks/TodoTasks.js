import React, { useState } from 'react';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import TaskItem from './TaskItem';

import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import AddIcon from '@material-ui/icons/Add';
import AddTaskDialog from './AddTaskDialog';

const ToDoTasks = () => {
  const [open, setOpen] = useState(false);
  const [task, setTask] = useState(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = value => {
    setOpen(false);
    console.log(value);
  };

  return (
    <React.Fragment>
      <Card>
        <CardContent>
          <Typography variant='h6' align='center'>
            To Do
          </Typography>
          <List>
            <TaskItem />
            <TaskItem />
            <TaskItem />
            <ListItem>
              <ListItemIcon>
                <IconButton color='primary' aria-label='delete' onClick={handleOpen}>
                  <AddIcon fontSize='large' />
                </IconButton>
              </ListItemIcon>
              <ListItemText primary='Add To Do Task' />
            </ListItem>
          </List>
        </CardContent>
      </Card>
      <AddTaskDialog task={task} open={open} onClose={handleClose} />
    </React.Fragment>
  );
};

export default ToDoTasks;
