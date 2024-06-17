import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

function App(): React.JSX.Element {
  const [dicePosition, setDicePosition] = useState(1);

  const rollDice = () => {
    const result = Math.floor(Math.random() * 6) + 1;
    setDicePosition(result);
  };

  const renderDots = () => {
    switch (dicePosition) {
      case 1:
        return (
          <View style={styles.diceFace}>
            <View style={styles.dot}></View>
          </View>
        );
      case 2:
        return (
          <View style={styles.diceFace}>
            <View style={[styles.dot, styles.topLeft]}></View>
            <View style={[styles.dot, styles.bottomRight]}></View>
          </View>
        );
      case 3:
        return (
          <View style={styles.diceFace}>
            <View style={[styles.dot, styles.topLeft]}></View>
            <View style={styles.dot}></View>
            <View style={[styles.dot, styles.bottomRight]}></View>
          </View>
        );
      case 4:
        return (
          <View style={styles.diceFace}>
            <View style={[styles.dot, styles.topLeft]}></View>
            <View style={[styles.dot, styles.topRight]}></View>
            <View style={[styles.dot, styles.bottomLeft]}></View>
            <View style={[styles.dot, styles.bottomRight]}></View>
          </View>
        );
      case 5:
        return (
          <View style={styles.diceFace}>
            <View style={[styles.dot, styles.topLeft]}></View>
            <View style={[styles.dot, styles.topRight]}></View>
            <View style={styles.dot}></View>
            <View style={[styles.dot, styles.bottomLeft]}></View>
            <View style={[styles.dot, styles.bottomRight]}></View>
          </View>
        );
      case 6:
        return (
          <View style={styles.diceFace}>
            <View style={[styles.dot, styles.topLeft]}></View>
            <View style={[styles.dot, styles.topRight]}></View>
            <View style={[styles.dot, styles.middleLeft]}></View>
            <View style={[styles.dot, styles.middleRight]}></View>
            <View style={[styles.dot, styles.bottomLeft]}></View>
            <View style={[styles.dot, styles.bottomRight]}></View>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.dice}>
          {renderDots()}
        </View>
        <TouchableOpacity onPress={rollDice}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Roll The Dice</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dice: {
    backgroundColor: 'blue',
    width: 100,
    height: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  diceFace: {
    width: '100%',
    height: '100%',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    position: 'absolute',
    backgroundColor: 'white',
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  topLeft: {
    top: 10,
    left: 10,
  },
  topRight: {
    top: 10,
    right: 10,
  },
  middleLeft: {
    top: '50%',
    left: 10,
    marginTop: -10,
  },
  middleRight: {
    top: '50%',
    right: 10,
    marginTop: -10,
  },
  bottomLeft: {
    bottom: 10,
    left: 10,
  },
  bottomRight: {
    bottom: 10,
    right: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center', // Center the text vertically
    alignItems: 'center',     // Center the text horizontally
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    textAlign: 'center',
  }
});

export default App;
