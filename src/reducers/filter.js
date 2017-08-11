import { CHANGE_FILTER } from './../actions/changeFilter';

const initialState = '';

export default function filter(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.payload;
    default:
      return state;
  }
}
