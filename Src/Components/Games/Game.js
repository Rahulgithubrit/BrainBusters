import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import GameTitle from '../../Assets/NumberPuzzle/GameTitle';
import Line from '../../Assets/Line';
import ImageDiamond from '../../Assets/NumberPuzzle/ImageDiamond';
import CommentCloud from '../../Assets/NumberPuzzle/CommentCloud';
import Banner from '../Google Ads/Banner';
import Interstitial from '../Google Ads/Interstitial';

let NUMBER_OF_NUMBERS = 5;
const MAX_NUMBER = 9;
let SEQUENCE_DISPLAY_DURATION = 3000;
const Number = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

const Game = ({ route }) => {
  const { numberScore = 0, numberLevel = 1 } = route.params || {};
  const [numberSequence, setNumberSequence] = useState([]);
  const [playerInput, setPlayerInput] = useState('');
  const [gameStatus, setGameStatus] = useState('waiting');
  const [showSequence, setShowSequence] = useState(false);
  const [level, setLevel] = useState(numberLevel);
  const [score, setScore] = useState(numberScore);
  const [gameOver, setGameOver] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    const loadProgress = async () => {
      const savedNumberScore = await AsyncStorage.getItem('numberScore');
      const savedNumberLevel = await AsyncStorage.getItem('numberLevel');
      if (savedNumberScore !== null) setScore(parseInt(savedNumberScore));
      if (savedNumberLevel !== null) setLevel(parseInt(savedNumberLevel));
    };
    loadProgress();
  }, []);

  useEffect(() => {
    const levelSettings = [
      { numbers: 3, duration: 3000 },
      { numbers: 4, duration: 3500 },
      { numbers: 5, duration: 4000 },
      { numbers: 6, duration: 4500 },
      { numbers: 7, duration: 5000 },
      { numbers: 8, duration: 5500 },
      { numbers: 9, duration: 6000 },
      { numbers: 10, duration: 6500 },
      { numbers: 11, duration: 7000 },
      { numbers: 12, duration: 8000 },
      { numbers: 13, duration: 9000 },
      { numbers: 14, duration: 10000 },
      { numbers: 15, duration: 11000 },
      { numbers: 15, duration: 12000 },
      { numbers: 15, duration: 13000 },
      { numbers: 15, duration: 14000 },
      { numbers: 15, duration: 15000 },
      { numbers: 15, duration: 16000 },
      { numbers: 15, duration: 17000 },
      { numbers: 15, duration: 18000 },
      { numbers: 15, duration: 18000 },
      { numbers: 15, duration: 18000 },
      { numbers: 15, duration: 18000 },
      { numbers: 15, duration: 18000 },
      { numbers: 15, duration: 18000 },
      { numbers: 15, duration: 18000 },
      { numbers: 15, duration: 18000 },
      { numbers: 15, duration: 18000 },
      { numbers: 15, duration: 18000 },
      { numbers: 15, duration: 15000 },
      { numbers: 15, duration: 15000 },
      { numbers: 15, duration: 15000 },
      { numbers: 15, duration: 15000 },
      { numbers: 15, duration: 15000 },
      { numbers: 15, duration: 15000 },
      { numbers: 15, duration: 15000 },
      { numbers: 15, duration: 14000 },
      { numbers: 15, duration: 14000 },
      { numbers: 15, duration: 14000 },
      { numbers: 15, duration: 14000 },
      { numbers: 15, duration: 14000 },
      { numbers: 15, duration: 14000 },
      { numbers: 15, duration: 14000 },
      { numbers: 15, duration: 13000 },
      { numbers: 15, duration: 13000 },
      { numbers: 15, duration: 13000 },
      { numbers: 15, duration: 13000 },
      { numbers: 15, duration: 13000 },
      { numbers: 15, duration: 13000 },
      { numbers: 15, duration: 12000 },
      { numbers: 15, duration: 12000 },
      { numbers: 15, duration: 12000 },
      { numbers: 15, duration: 12000 },
      { numbers: 15, duration: 12000 },
      { numbers: 15, duration: 12000 },
      { numbers: 15, duration: 12000 },
      { numbers: 15, duration: 12000 },
      { numbers: 15, duration: 11000 },
      { numbers: 15, duration: 11000 },
      { numbers: 15, duration: 11000 },
      { numbers: 15, duration: 11000 },
      { numbers: 15, duration: 11000 },
      { numbers: 15, duration: 11000 },
      { numbers: 15, duration: 11000 },
      { numbers: 15, duration: 11000 },
      { numbers: 15, duration: 11000 },
      { numbers: 15, duration: 11000 },
      { numbers: 15, duration: 11000 },
      { numbers: 15, duration: 10000 },
      { numbers: 15, duration: 10000 },
      { numbers: 15, duration: 10000 },
      { numbers: 15, duration: 10000 },
      { numbers: 15, duration: 10000 },
      { numbers: 15, duration: 10000 },
      { numbers: 15, duration: 10000 },
      { numbers: 15, duration: 10000 },
      { numbers: 15, duration: 10000 },
      { numbers: 15, duration: 10000 },
      { numbers: 15, duration: 10000 },
      { numbers: 15, duration: 10000 },
      { numbers: 16, duration: 10000 },
      { numbers: 16, duration: 10000 },
      { numbers: 16, duration: 10000 },
      { numbers: 16, duration: 10000 },
      { numbers: 16, duration: 10000 },
      { numbers: 16, duration: 10000 },
      { numbers: 16, duration: 10000 },
      { numbers: 16, duration: 10000 },
      { numbers: 17, duration: 10000 },
      { numbers: 17, duration: 10000 },
      { numbers: 17, duration: 10000 },
      { numbers: 17, duration: 10000 },
      { numbers: 17, duration: 10000 },
      { numbers: 17, duration: 10000 },
      { numbers: 15, duration: 8000 },
      { numbers: 15, duration: 8000 },
      { numbers: 15, duration: 8000 },
      { numbers: 15, duration: 8000 },
      { numbers: 15, duration: 8000 },
      { numbers: 15, duration: 6000 },
      { numbers: 15, duration: 6000 },
      { numbers: 15, duration: 6000 },
      { numbers: 15, duration: 6000 },
      { numbers: 15, duration: 6000 },
      { numbers: 17, duration: 8000 },
      { numbers: 17, duration: 8000 },
      { numbers: 17, duration: 8000 },
      { numbers: 17, duration: 8000 },
      { numbers: 17, duration: 7000 },
      { numbers: 17, duration: 7000 },
      { numbers: 17, duration: 7000 },
      { numbers: 17, duration: 7000 },
      { numbers: 17, duration: 7000 },
      { numbers: 17, duration: 7000 },
      { numbers: 17, duration: 7000 },
      { numbers: 17, duration: 7000 },
      { numbers: 17, duration: 7000 },
      { numbers: 15, duration: 10000 },
      { numbers: 15, duration: 10000 },
      { numbers: 15, duration: 10000 },
      { numbers: 15, duration: 10000 },
      { numbers: 15, duration: 10000 },
      { numbers: 15, duration: 10000 },
      { numbers: 13, duration: 3000 },
      { numbers: 13, duration: 3000 },
      { numbers: 13, duration: 3000 },
      { numbers: 13, duration: 3000 },
      { numbers: 13, duration: 3000 },
      { numbers: 13, duration: 3000 },
      { numbers: 13, duration: 3000 },
      { numbers: 13, duration: 3000 },
      { numbers: 13, duration: 3000 },
      { numbers: 13, duration: 3000 },
      { numbers: 13, duration: 3000 },
      { numbers: 13, duration: 3000 },
      { numbers: 13, duration: 3000 },
      { numbers: 13, duration: 3000 },
      { numbers: 12, duration: 4000 },
      { numbers: 12, duration: 4000 },
      { numbers: 12, duration: 4000 },
      { numbers: 12, duration: 4000 },
      { numbers: 12, duration: 4000 },
      { numbers: 12, duration: 4000 },
      { numbers: 12, duration: 4000 },
      { numbers: 12, duration: 4000 },
      { numbers: 12, duration: 4000 },
      { numbers: 12, duration: 4000 },
      { numbers: 12, duration: 4000 },
      { numbers: 12, duration: 4000 },
      { numbers: 12, duration: 4000 },
      { numbers: 15, duration: 5000 },
      { numbers: 15, duration: 5000 },
      { numbers: 15, duration: 5000 },
      { numbers: 18, duration: 5000 },
      { numbers: 18, duration: 6000 },
      { numbers: 18, duration: 6000 },
      { numbers: 18, duration: 8000 },
      { numbers: 18, duration: 5000 },
      { numbers: 18, duration: 5000 },
      { numbers: 18, duration: 5000 },
      { numbers: 20, duration: 5000 },
      { numbers: 20, duration: 5000 },
      { numbers: 20, duration: 5000 },
      { numbers: 20, duration: 5000 },
      { numbers: 20, duration: 5000 },
      { numbers: 20, duration: 5000 },
      { numbers: 20, duration: 5000 },
      { numbers: 20, duration: 5000 },

    ];
    const currentLevel = level - 1;
    if (currentLevel < levelSettings.length) {
      NUMBER_OF_NUMBERS = levelSettings[currentLevel].numbers;
      SEQUENCE_DISPLAY_DURATION = levelSettings[currentLevel].duration;
    }
  }, [level]);

  const generateNumberSequence = () => {
    const sequence = [];
    for (let i = 0; i < NUMBER_OF_NUMBERS; i++) {
      sequence.push(Math.floor(Math.random() * (MAX_NUMBER + 1)));
    }
    setNumberSequence(sequence);
    setShowSequence(true);
    setTimeout(() => {
      setShowSequence(false);
      setGameStatus('playing');
    }, SEQUENCE_DISPLAY_DURATION);
  };

  const handleInput = (number) => {
    setPlayerInput((prevInput) => prevInput + number.toString());
  };

  const checkInput = async () => {
    if (playerInput === numberSequence.join('')) {
      setGameStatus('finished');
      setScore(score + 1);
      setLevel(level + 1);
      // Alert.alert('Congratulations!', 'You got it right!');
      setGameOver(true)
      await saveProgress(score + 1, level + 1);
      setPlayerInput('');
    } else if (playerInput === '') {
      Alert.alert("Fill the Answer");
    } else {
      Alert.alert('You Have Filled', 'Wrong Answer!', [{ text: "Try Again", onPress: generateNumberSequence }]);
      setPlayerInput('');
    }
  };


  const resetInput = () => {
    setPlayerInput('');
  };

  const saveProgress = async (newScore, newLevel) => {
    await AsyncStorage.setItem('numberScore', newScore.toString());
    await AsyncStorage.setItem('numberLevel', newLevel.toString());
  };
  useEffect(() => {
    setTimeout(() => {
      setGameStatus("playing")
    }, 5000);
  })

  useEffect(() => {
    if (gameStatus === 'playing') {
      generateNumberSequence();
    }
  }, [gameStatus]);

  return (
    <LinearGradient colors={['#60BDB2', '#58ADA4', '#46A8A8', '#3DA5A9', '#34A3AB']} style={styles.container}>
      <View style={styles.ScoreDetails} >
        <Text style={styles.Score} >
          Score: {score}
        </Text>
        <Text style={styles.Score}>
          Level: {level}
        </Text>
      </View>
      <View >
        <Line />
      </View>
      <View>
        <GameTitle />
      </View>
      <View style={styles.Images} >
        <ImageDiamond style={{ top: 80 }} />
        <CommentCloud />
      </View>
      {showSequence && <Text style={styles.sequence}>{numberSequence.join(' ')}</Text>}
      {gameStatus === 'playing' && (
        <View style={styles.inputContainer}>
          <Text style={styles.input}>{playerInput}</Text>
          <View style={styles.buttonRow}>
            {Number.map((number) => (
              <TouchableOpacity key={number} style={styles.Button} onPress={() => handleInput(number)}>
                <Text style={styles.text} >{number.toString()}</Text>
              </TouchableOpacity>
            ))}
            {/* <Button title="Submit" onPress={checkInput} /> */}
            <TouchableOpacity style={styles.btnsubmit} onPress={checkInput}>
              <Text style={styles.btnsText} >Submit</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.OptionButton}>
            <TouchableOpacity style={styles.btns} onPress={resetInput}>
              <Text style={styles.btnsText} >RESET</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btns} onPress={generateNumberSequence}>
              <Text style={styles.btnsText}>Restart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btns} onPress={() => navigation.navigate('Home', { numberScore: score, numberLevel: level })}>
              <Text style={styles.btnsText}>Back</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      {gameOver && (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Interstitial />
        </View>
      )}
      <View style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <Banner />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    gap: 20
  },
  ScoreDetails: {
    width: "80%",
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 10
  },
  Score: {
    color: 'white',
    fontSize: 20
  },
  Images: {
    flexDirection: 'row',
    width: "100%",
  },
  sequence: {
    fontSize: 24,
    top: 40,
    fontWeight: 'bold',
  },
  inputContainer: {
    alignItems: 'center',
    top: 10,
    width: '80%',
  },
  input: {
    fontSize: 24,
  },
  buttonRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 10,
    width: '70%',
    gap: 10,
    backgroundColor: '#389B95',
    padding: 20,
    borderRadius: 10,
  },
  result: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
  },
  Button: {
    backgroundColor: '#D9D9D9',
    width: 40,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    color: 'black',
    fontWeight: '900'
  },
  OptionButton: {
    flexDirection: 'row',
    gap: 40,
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
  },
  btns: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '25%',
    height: 40,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    color: 'black'
  },
  btnsText: {
    color: 'black',
    fontSize: 15,
    fontWeight: "bold"
  },
  btnsubmit: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    height: 40,
    backgroundColor: '#D9D9D9',
    borderRadius: 10,
    color: 'black'
  }
});

export default Game;
