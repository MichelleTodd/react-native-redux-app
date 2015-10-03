'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import Counter from '../components/Counter.ios';
import * as DuckCounterActions from '../actions/duck-counter';

function mapStateToProps(state) {
  return {
    ducks: state.ducks
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(DuckCounterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
