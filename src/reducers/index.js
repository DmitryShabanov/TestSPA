import { combineReducers } from 'redux';

import tasks from './tasks';
import taskInput from './taskInput';
import filter from './filter';

export default combineReducers({
  tasks,
  taskInput,
  filter,
});
