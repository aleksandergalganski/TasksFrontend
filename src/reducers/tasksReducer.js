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
} from '../actions/types';

const initialState = {
  todoTasks: [],
  runningTasks: [],
  finishedTasks: [],
  snackBarMessage: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TODO_TASKS:
      return {
        ...state,
        todoTasks: action.payload,
        loading: false
      };
    case GET_RUNNING_TASKS:
      return {
        ...state,
        runningTasks: action.payload,
        loading: false
      };
    case GET_FINISHED_TASKS:
      return {
        ...state,
        finishedTasks: action.payload,
        loading: false
      };
    case SET_TASK_AS_RUNNING:
      return {
        ...state,
        todoTasks: state.todoTasks.filter(task => task.id !== action.payload.id),
        runningTasks: [...state.runningTasks, action.payload],
        snackBarMessage: 'Task set as running',
        loading: false
      };
    case SET_TASK_AS_FINISHED:
      return {
        ...state,
        runningTasks: state.runningTasks.filter(task => task.id !== action.payload.id),
        finishedTasks: [...state.finishedTasks, action.payload],
        snackBarMessage: 'Task set as finished',
        loading: false
      };
    case ADD_RUNNING_TASK:
      return {
        ...state,
        runningTasks: [...state.runningTasks, action.payload],
        snackBarMessage: 'Task added',
        loading: false
      };
    case ADD_TODO_TASK:
      return {
        ...state,
        todoTasks: [...state.todoTasks, action.payload],
        snackBarMessage: 'Task added',
        loading: false
      };
    case DELETE_RUNNING_TASK:
      return {
        ...state,
        runningTasks: state.runningTasks.filter(task => task.id !== action.payload),
        snackBarMessage: 'Task deleted',
        loading: false
      };
    case DELETE_TODO_TASK:
      return {
        ...state,
        todoTasks: state.todoTasks.filter(task => task.id !== action.payload),
        snackBarMessage: 'Task deleted',
        loading: false
      };
    case DELETE_FINISHED_TASK:
      return {
        ...state,
        finishedTasks: state.finishedTasks.filter(task => task.id !== action.payload),
        snackBarMessage: 'Task deleted',
        loading: false
      };
    case CLEAR_TASKS:
      return {
        ...state,
        finishedTasks: [],
        todoTasks: [],
        runningTasks: []
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case CLEAR_SNACKBAR:
      return {
        ...state,
        snackBarMessage: null
      };
    default:
      return state;
  }
};
