export const CHANGE_TASK_STATUS = 'CHANGE_TASK_STATUS';

export function changeTaskStatus(value) {
  return {
    type: CHANGE_TASK_STATUS,
    payload: value,
  };
}
