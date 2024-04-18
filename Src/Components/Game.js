import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const NUMBER_OF_NUMBERS = 5; // Adjust the length of the number sequence
const MAX_NUMBER = 9; // Adjust the range of random numbers

const Game = () => {
  const [numberSequence, setNumberSequence] = useState([]);
  const [playerInput, setPlayerInput] = useState('');
  const [gameStatus, setGameStatus] = useState('waiting'); // 'waiting', 'playing', 'finished'

  // Function to generate a random number sequence
  const generateNumberSequence = () => {
    const sequence = [];
    for (let i = 0; i < NUMBER_OF_NUMBERS; i++) {
      sequence.push(Math.floor(Math.random() * (MAX_NUMBER + 1)));
    }
    setNumberSequence(sequence);
    setGameStatus('playing');
  };

  // Function to handle player's input
  const handleInput = (number) => {
    setPlayerInput((prevInput) => prevInput + number.toString());
  };

  // Function to check player's input against the generated sequence
  const checkInput = () => {
    if (playerInput === numberSequence.join('')) {
      setGameStatus('finished');
    } else {
      // Handle incorrect input
      alert('Incorrect! Try again.');
      setPlayerInput('');
    }
  };

  // Effect to generate a new sequence when the game starts
  useEffect(() => {
    if (gameStatus === 'playing') {
      generateNumberSequence();
    }
  }, [gameStatus]);

  return (
    <View style={styles.container}>
      <Text style={styles.instructions}>Memorize the number sequence:</Text>
      <Text style={styles.sequence}>{numberSequence.join(' ')}</Text>
      {gameStatus === 'playing' && (
        <View style={styles.inputContainer}>
          <Text style={styles.instructions}>Enter the sequence:</Text>
          <Text style={styles.input}>{playerInput}</Text>
          <View style={styles.buttonRow}>
            {[...Array(10).keys()].map((number) => (
              <Button key={number} title={number.toString()} onPress={() => handleInput(number)} />
            ))}
            <Button title="Submit" onPress={checkInput} />
          </View>
        </View>
      )}
      {gameStatus === 'finished' && (
        <Text style={styles.result}>Congratulations! You remembered the sequence!</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  instructions: {
    fontSize: 18,
    marginBottom: 10,
  },
  sequence: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    alignItems: 'center',
  },
  input: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  result: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
  },
});

export default Game;
