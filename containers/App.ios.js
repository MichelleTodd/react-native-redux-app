'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import MyComponent from '../components/MyComponent.ios';
import * as ComponentActions from '../actions/component';

function mapStateToProps(state) {
  return {
    component: state.component
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ComponentActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent);
