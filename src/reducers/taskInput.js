import { CHANGE_TASK_INPUT } from './../actions/changeTaskInput';

const initialState = '';

export default function taskInput(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TASK_INPUT:
      return action.payload;
    default:
      return state;
  }
}
