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
  SET_LOADING
} from './types';

export const getTasks = type => async dispatch => {
  try {
    dispatch({ type: SET_LOADING });

    const tasks = await axios.get('http://localhost:5000/api/v1/tasks', {
      params: { type }
    });

    switch (type) {
      case 'running':
        dispatch({ type: GET_RUNNING_TASKS, payload: tasks });
        break;
      case 'todo':
        dispatch({ type: GET_TODO_TASKS, payload: tasks });
        break;
      case 'finished':
        dispatch({ type: GET_FINISHED_TASKS, payload: tasks });
        break;
    }
  } catch (err) {
    console.error(err.response.statusText);
  }
};

export const changeTaskType = (id, previousType) => async dispatch => {
  try {
    dispatch({ SET_LOADING });

    let newType = '';

    switch (previousType) {
      case 'todo':
        newType = 'running';
        break;
      case 'running':
        newType = 'finished';
        break;
    }

    const task = await axios.get(`http://localhost:5000/api/v1/tasks/${id}`, { newType });

    switch (previousType) {
      case 'todo':
        dispatch({ type: SET_TASK_AS_RUNNING, payload: task });
        break;
      case 'running':
        dispatch({ type: SET_TASK_AS_FINISHED, payload: task });
        break;
    }
  } catch (err) {
    console.error(error);
  }
};

export const addTask = (type, task) => async dispatch => {
  dispatch({ type: SET_LOADING });
  const task = axios.post(
    'http://localhost:5000/api/v1/tasks',
    { ...task, type },
    {
      headers: {
        'Content-Type': 'application/json'
      }
    }
  );

  switch (type) {
    case 'running':
      dispatch({ type: ADD_RUNNING_TASK, payload: task });
      break;
    case 'todo':
      dispatch({ type: ADD_TODO_TASK, payload: task });
      break;
  }
};

export const deleteTask = (id, type) => async dispatch => {
  try {
    dispatch({ type: SET_LOADING });

    await axios.delete(`http://localhost:5000/api/v1/tasks/${id}`);

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
    }
  } catch (err) {
    console.error(err.response.statusText);
  }
};

export const clearTasks = () => dispatch => {
  dispatch({ type: CLEAR_TASKS });
};
