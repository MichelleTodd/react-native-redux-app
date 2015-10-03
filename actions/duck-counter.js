export const INCREMENT_DUCKS = 'INCREMENT_DUCKS';
export const DECREMENT_DUCKS = 'DECREMENT_DUCKS';

export function incrementDucks() {
  return {
    type: INCREMENT_DUCKS
  };
}

export function decrementDucks() {
  return {
    type: DECREMENT_DUCKS
  };
}