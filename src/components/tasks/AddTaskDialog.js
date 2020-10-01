import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(2, 0, 2, 0),
    width: '100%'
  }
}));

const AddTaskDialog = ({ onClose, open, task }) => {
  const classes = useStyles();

  const onAdd = () => {
    onClose({ name: 'name', id: 3 });
  };

  const onCancel = () => {
    onClose(false);
  };

  return (
    <Dialog onClose={onCancel} aria-labelledby='simple-dialog-title' open={open}>
      <DialogTitle id='simple-dialog-title'>Add Task</DialogTitle>
      <DialogContent>
        <FormControl className={classes.formControl}>
          <TextField id='task' label='Task' variant='outlined' />
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button variant='contained' onClick={onAdd} color='primary'>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

AddTaskDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  task: PropTypes.object
};

export default AddTaskDialog;
