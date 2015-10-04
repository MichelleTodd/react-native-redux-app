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

    var animalEmoji = [];
    var animalCounters = [];
    for (let animal in animals) {
      const animalData = animals[animal];
      for (let i = 0; i < animals[animal].count; i++) {
        animalEmoji.push(
          <Text key={animal + i} style={styles.emoji}>
            {animals[animal].emoji}
          </Text>
        );
      }
      animalCounters.push(
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
      <View style={styles.emojiContainer}>
        {animalEmoji}
      </View>
      <View style={styles.counters}>
        {animalCounters}
      </View>
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
    backgroundColor: '#F5FCFF',
    flex: 1,
  },
  emojiContainer: {
    alignItems: 'flex-start',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 50,
  },
  emoji: {
    fontSize: 32,
  },
  counters: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  animalCount: {
    alignItems: 'stretch',
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
    borderColor: 'rgba(0, 0, 0, 0.1)',
    borderTopWidth: 1,
    flex: 1,
    flexDirection: 'column',
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