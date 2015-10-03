import { INCREMENT_TURTLES, DECREMENT_TURTLES } from '../actions/turtle-counter.js';

export default function turtleCounter(state = 0, action) {
  switch (action.type) {
    case INCREMENT_TURTLES:
      return state + 1;
    case DECREMENT_TURTLES:
      return state > 0 ? state - 1 : state;
    default:
      return state;
  }
}