export const CHANGE_TASK = 'CHANGE_TASK';

export function changeTask(task, editedTask) {
  return {
    type: CHANGE_TASK,
    payload: { task, editedTask },
  };
}
