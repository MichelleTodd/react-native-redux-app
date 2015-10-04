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

class Button extends Component {
  render() {
    return (
      <TouchableHighlight
          onPress={this.props.onPress}
          underlayColor='rgba(0, 0, 0, 0.1)'
          style={styles.button}>
        <Text style={styles.buttonText}>
          {this.props.children}
        </Text>
      </TouchableHighlight>
    );
  }
}

Button.PropTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

class Count extends Component {
  render() {
    var { count, names, increment, decrement } = this.props;
    return (
      <View>
        <Text style={styles.count}>
          {count} {count == 1 ? names.singular : names.plural}
        </Text>
        <Button onPress={increment}>
          +
        </Button>
        <Button onPress={decrement}>
          -
        </Button>
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
    const { dispatch, animals } = this.props;
    const { increment, decrement } = this.props.counterActions;

    var animalCounts = [];
    for (let animal in animals) {
      const animalData = animals[animal];
      animalCounts.push(
        <Count
            key={animal}
            names={animals[animal].name}
            count={animals[animal].count}
            increment={() => {increment(animal)}}
            decrement={() => {decrement(animal)}} />
      );
    }

    return (
      <View style={styles.container}>
      {animalCounts}
      </View>
    );
  }
};

Counter.PropTypes = {
  animals: PropTypes.object.isRequired,
  counterActions: PropTypes.shape({
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
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