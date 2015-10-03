import { INCREMENT_DUCKS, DECREMENT_DUCKS } from '../actions/duck-counter.js';

export default function duckCounter(state = 0, action) {
  switch (action.type) {
    case INCREMENT_DUCKS:
      return state + 1;
    case DECREMENT_DUCKS:
      return state > 0 ? state - 1 : state;
    default:
      return state;
  }
}