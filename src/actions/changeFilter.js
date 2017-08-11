export const CHANGE_FILTER = 'CHANGE_FILTER';

export function changeFilter(value) {
  return {
    type: CHANGE_FILTER,
    payload: value,
  };
}
