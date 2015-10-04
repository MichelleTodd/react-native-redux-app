import { INCREMENT, DECREMENT } from '../actions/counter.js';

const initialState = {
    animals: {
        duck: {
          name: {
            singular: 'duck',
            plural: 'ducks',
          },
          count: 0,
        },
        turtle: {
          name: {
            singular: 'turtle',
            plural: 'turtles',
          },
          count: 0,
        },
        potato: {
          name: {
            singular: 'potato',
            plural: 'potatoes',
          },
          count: 0,
        },
    },
};

export default function animals(state, action) {
  const animal = action.animal;
  const count = animal && state[animal] ? state[animal].count : 0;

  let newAnimalData = {};

  switch (action.type) {
    case INCREMENT:
      newAnimalData[animal] = Object.assign(
          {},
          state[animal],
          {count: count + 1}
      );
      return Object.assign({}, state, newAnimalData);
    case DECREMENT:
      newAnimalData[animal] = Object.assign(
          {},
          state[animal],
          {count: count > 0 ? count - 1 : count}
      );
      return Object.assign({}, state, newAnimalData);
    default:
      return state;
  }
}

export default function counter(state = initialState, action) {
  return {
    animals: animals(state.animals, action),
  };
};