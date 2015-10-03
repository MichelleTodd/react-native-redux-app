export const INCREMENT_TURTLES = 'INCREMENT_TURTLES';
export const DECREMENT_TURTLES = 'DECREMENT_TURTLES';

export function incrementTurtles() {
  return {
    type: INCREMENT_TURTLES
  };
}

export function decrementTurtles() {
  return {
    type: DECREMENT_TURTLES
  };
}