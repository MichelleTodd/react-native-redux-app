'use strict';

import React from 'react-native';
import { Provider } from 'react-redux/native';
import App from './containers/App.ios';
import configureStore from './store/configureStore';

const store = configureStore();

var AppComponent = React.createClass({
  render: function() {
    return <Provider store={store}>
      {() => <App />}
    </Provider>;
  }
});

React.AppRegistry.registerComponent('ReduxCounter', () => AppComponent);
