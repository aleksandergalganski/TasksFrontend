import { combineReducers } from 'redux';
import tasksReducer from './taskReducer';

export default combineReducers({
  tasks: tasksReducer
});