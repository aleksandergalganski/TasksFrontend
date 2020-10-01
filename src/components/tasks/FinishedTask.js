import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import ListItemText from '@material-ui/core/ListItemText';
import DeleteIcon from '@material-ui/icons/Delete';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const FinishedTask = () => {
  return (
    <React.Fragment>
      <ListItem>
        <ListItemText primary='Single-line item' secondary={'Secondary text'} />
        <ListItemSecondaryAction>
          <IconButton edge='end' aria-label='delete'>
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </React.Fragment>
  );
};

export default FinishedTask;
