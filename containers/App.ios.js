'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import Counter from '../components/Counter.ios';
import * as DuckCounterActions from '../actions/duck-counter';
import * as TurtleCounterActions from '../actions/turtle-counter';

function mapStateToProps(state) {
  return {
    ducks: state.ducks,
    turtles: state.turtles,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    duckActions: bindActionCreators(DuckCounterActions, dispatch),
    turtleActions: bindActionCreators(TurtleCounterActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
