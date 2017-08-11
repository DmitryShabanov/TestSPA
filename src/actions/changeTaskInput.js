export const CHANGE_TASK_INPUT = 'CHANGE_TASK_INPUT';

export function changeTaskInput(value) {
  return {
    type: CHANGE_TASK_INPUT,
    payload: value,
  };
}
