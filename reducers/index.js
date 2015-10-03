import { combineReducers } from 'redux';
import ducks from './ducks';
import turtles from './turtles';

const rootReducer = combineReducers({
  ducks,
  turtles,
});

export default rootReducer;
