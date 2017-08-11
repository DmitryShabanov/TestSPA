import { List } from 'immutable';

import { ADD_TASK } from './../actions/addTask';
import { DELETE_TASK } from './../actions/deleteTask';
import { CHANGE_TASK_STATUS } from './../actions/changeTaskStatus';
import { CHANGE_TASK } from './../actions/changeTask';

const initialState = List([{ task: 'I will do this tomorrow', complete: true }, { task: 'write application with react and redux', complete: true }, { task: 'do something ...', complete: false }, { task: 'task to do in soon time', complete: true }, { task: 'do this task after completed tasks abowe', complete: false }, { task: 'do some PSD templates', complete: false }]);

export default function tracks(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      if (action.payload === '' || state.findIndex((value) => value.task === action.payload) !== -1) {
        return state;
      }
      return state.push({ task: action.payload, complete: false });
    case DELETE_TASK:
      return state.delete(state.findIndex((value) => value.task === action.payload));
    case CHANGE_TASK_STATUS:
      return state.map((value) => {
        if (value.task === action.payload) {
          return { task: value.task, complete: !value.complete };
        }
        return value;
      });
    case CHANGE_TASK:
      return state.map((value) => {
        if (value.task === action.payload.task) {
          return { task: action.payload.editedTask, complete: value.complete };
        }
        return value;
      });
    default:
      return state;
  }
}
