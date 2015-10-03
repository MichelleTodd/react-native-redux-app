'use strict';

import React from 'react-native';
var {
  Component,
  PropTypes
} = React;

var {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = React;

class Count extends Component {
  render() {
    var { count } = this.props;
    return (
      <View>
        <Text style={styles.count}>
          {count} {this.props.type + (count == 1 ? '' : 's')}
        </Text>
        <TouchableHighlight
            onPress={this.props.increment}
            underlayColor='rgba(0, 0, 0, 0.1)'>
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              Increment {this.props.type} count
            </Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight
            onPress={this.props.decrement}
            underlayColor='rgba(0, 0, 0, 0.1)'>
          <View style={styles.button}>
            <Text style={styles.buttonText}>
              Decrement {this.props.type} count
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

Count.PropTypes = {
  count: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
};


class Counter extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Count
          type='duck'
          count={this.props.ducks}
          increment={this.props.duckActions.incrementDucks}
          decrement={this.props.duckActions.decrementDucks} />
        <Count
          type='turtle'
          count={this.props.turtles}
          increment={this.props.turtleActions.incrementTurtles}
          decrement={this.props.turtleActions.decrementTurtles} />
      </View>
    );
  }
};

Counter.PropTypes = {
  ducks: PropTypes.number.isRequired,
  duckActions: PropTypes.shape({
    incrementDucks: PropTypes.func.isRequired,
    decrementDucks: PropTypes.func.isRequired,
  }),
  turtles: PropTypes.number.isRequired,
  turtleActions: PropTypes.shape({
    incrementTurtles: PropTypes.func.isRequired,
    decrementTurtles: PropTypes.func.isRequired,
  }),
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  count: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    borderWidth: 1,
    borderColor: '#ccc',
    margin: 5,
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default Counter;