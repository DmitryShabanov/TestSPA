export const ADD_TASK = 'ADD_TASK';

export function addTask(value) {
  return {
    type: ADD_TASK,
    payload: value,
  };
}
