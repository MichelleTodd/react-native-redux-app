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

class AnimalCount extends Component {
  render() {
    var { count, names, increment, decrement } = this.props;
    return (
      <View style={styles.animalCount}>
        <Button onPress={increment}>+</Button>
        <Text style={styles.count}>
          {count}
        </Text>
        <Text style={styles.animalName}>
          {count == 1 ? names.singular : names.plural}
        </Text>
        <Button onPress={decrement}>&ndash;</Button>
      </View>
    );
  }
}

AnimalCount.PropTypes = {
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
        <AnimalCount
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
    flexDirection: 'row',
    alignItems: 'flex-end',
    backgroundColor: '#F5FCFF',
  },
  animalCount: {
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderTopWidth: 1,
    flex: 1,
    alignItems: 'stretch',
    flexDirection: 'column',
    alignItems: 'center',
  },
  count: {
    fontSize: 32,
    textAlign: 'center',
  },
  animalName: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
  button: {
    alignSelf: 'stretch',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    borderRadius: 4,
    flex: 1,
    margin: 5,
    height: 40,
  },
  buttonText: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center',
  },
});

export default Counter;