import axios from 'axios';
import {
  GET_TODO_TASKS,
  GET_RUNNING_TASKS,
  GET_FINISHED_TASKS,
  SET_TASK_AS_RUNNING,
  SET_TASK_AS_FINISHED,
  ADD_RUNNING_TASK,
  ADD_TODO_TASK,
  DELETE_TODO_TASK,
  DELETE_RUNNING_TASK,
  DELETE_FINISHED_TASK,
  CLEAR_TASKS,
  SET_LOADING,
  CLEAR_SNACKBAR
} from './types';

export const getTasks = type => async (dispatch, state) => {
  try {
    dispatch({ type: SET_LOADING });

    const res = await axios.get(`${process.env.REACT_APP_API_URI}/api/v1/tasks`, {
      params: { type },
      headers: {
        'x-auth-token': state().auth.token
      }
    });

    switch (type) {
      case 'running':
        dispatch({ type: GET_RUNNING_TASKS, payload: res.data.data });
        break;
      case 'todo':
        dispatch({ type: GET_TODO_TASKS, payload: res.data.data });
        break;
      case 'finished':
        dispatch({ type: GET_FINISHED_TASKS, payload: res.data.data });
        break;
      default:
        dispatch({ type: GET_RUNNING_TASKS, payload: res.data.data });
    }
  } catch (err) {
    console.error(err.response.statusText);
  }
};

export const changeTaskType = (id, previousType) => async (dispatch, state) => {
  try {
    dispatch({ type: SET_LOADING });

    let newType = '';

    switch (previousType) {
      case 'todo':
        newType = 'running';
        break;
      case 'running':
        newType = 'finished';
        break;
      default:
        newType = 'running';
    }

    const res = await axios.put(
      `${process.env.REACT_APP_API_URI}/api/v1/tasks/${id}`,
      {
        type: newType
      },
      {
        headers: {
          'x-auth-token': state().auth.token
        }
      }
    );

    switch (previousType) {
      case 'todo':
        dispatch({ type: SET_TASK_AS_RUNNING, payload: res.data.data });
        break;
      case 'running':
        dispatch({ type: SET_TASK_AS_FINISHED, payload: res.data.data });
        break;
      default:
        dispatch({ type: SET_TASK_AS_RUNNING, payload: res.data.data });
    }
  } catch (err) {
    console.error(err.response);
  }
};

export const addTask = (type, name) => async (dispatch, state) => {
  try {
    dispatch({ type: SET_LOADING });
    const res = await axios.post(
      `${process.env.REACT_APP_API_URI}/api/v1/tasks`,
      { type, name },
      {
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': state().auth.token
        }
      }
    );

    switch (type) {
      case 'running':
        dispatch({ type: ADD_RUNNING_TASK, payload: res.data.data });
        break;
      case 'todo':
        dispatch({ type: ADD_TODO_TASK, payload: res.data.data });
        break;
      default:
        dispatch({ type: ADD_RUNNING_TASK, payload: res.data.data });
    }
  } catch (err) {
    console.error(err.response.data.message);
  }
};

export const deleteTask = (id, type) => async (dispatch, state) => {
  try {
    dispatch({ type: SET_LOADING });

    await axios.delete(`${process.env.REACT_APP_API_URI}/api/v1/tasks/${id}`, {
      headers: {
        'x-auth-token': state().auth.token
      }
    });

    switch (type) {
      case 'running':
        dispatch({ type: DELETE_RUNNING_TASK, payload: id });
        break;
      case 'todo':
        dispatch({ type: DELETE_TODO_TASK, payload: id });
        break;
      case 'finished':
        dispatch({ type: DELETE_FINISHED_TASK, payload: id });
        break;
      default:
        dispatch({ type: DELETE_RUNNING_TASK, payload: id });
    }
  } catch (err) {
    console.error(err.response.statusText);
  }
};

export const clearTasks = () => dispatch => {
  dispatch({ type: CLEAR_TASKS });
};

export const clearSnackBar = () => dispatch => dispatch({ type: CLEAR_SNACKBAR });
