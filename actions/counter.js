export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export function increment(animal) {
  return {
    type: INCREMENT,
    animal: animal,
  };
}

export function decrement(animal) {
  return {
    type: DECREMENT,
    animal: animal,
  };
}