export const DELETE_TASK = 'DELETE_TASK';

export function deleteTask(value) {
  return {
    type: DELETE_TASK,
    payload: value,
  };
}
