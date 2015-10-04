'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import Counter from '../components/Counter.ios';
import * as CounterActions from '../actions/counter';

function mapStateToProps(state) {
  return {
    animals: state.counter.animals,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    counterActions: bindActionCreators(CounterActions, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
