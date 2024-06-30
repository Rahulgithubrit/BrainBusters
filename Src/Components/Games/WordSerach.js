import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Linee from '../../Assets/Line';
import SequenceTitle from '../../Assets/SequenceSolver/SequenceTitle';
import SequenceMain from '../../Assets/SequenceSolver/SequenceMain';
import SequenceComment from '../../Assets/SequenceSolver/SequenceComment';

const WORDS = ['ABERRATION', 'ACCELERATE', 'ACKNOWLEDGE', 'ADVENTURES', 'AMBULANCES', 'BELLIGERENT', 'BENEFACTOR', 'CIRCUMVENT', 'CONSTRUCTS', 'DECEPTIVELY', 'DISPOSABLE', 'EFFICIENTLY', 'ELIMINATES', 'FACILITATE', 'FUNDAMENTAL', 'HYPOTHESIS', 'ILLUSTRATE', 'INEVITABLE', 'JUDICIOUSLY', 'LEGITIMATE', 'METICULOUS', 'NECESSARY', 'OBSERVANCE', 'PERCEPTION', 'QUESTIONING', 'RECOGNITION', 'SATISFYING', 'TERMINATED', 'UNDERSTAND', 'VULNERABLE', 'WHIMSICALLY', 'XYLOPHONIC', 'YOUTHFULLY', 'ZOMBIFIED', 'ABUNDANTLY', 'ASTONISHED', 'BREATHTAKING', 'CHALLENGING', 'DETERMINANT', 'EMBRACEABLE', 'FABRICATING', 'GRACIOUSLY', 'HARMONIOUS', 'INTRIGUING', 'JUBILATION', 'KALEIDOSCOPE', 'LUMINESCENT', 'MANIPULATE', 'NOURISHING', 'OVERWHELMING'];

const GAME_DURATION_SECONDS = 2000000;

const WordSearchGame = ({ route }) => {
    const { wordScore = 0, wordLevel = 1 } = route.params || {};
    const [currentWord, setCurrentWord] = useState('');
    const [wordInGrid, setWordInGrid] = useState([]);
    const [selectedLetters, setSelectedLetters] = useState([]);
    const [selectedWord, setSelectedWord] = useState('');
    const [timeLeft, setTimeLeft] = useState(GAME_DURATION_SECONDS);
    const [score, setScore] = useState(wordScore);
    const [level, setLevel] = useState(wordLevel);
    const navigation = useNavigation();

    useEffect(() => {
        initializeGame();
        const timer = setInterval(() => {
            if (timeLeft > 0) {
                setTimeLeft(prev => prev - 1);
            } else {
                clearInterval(timer);
                Alert.alert('Time is up!', 'Game over!');
            }
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        if (timeLeft === 0) {
            Alert.alert('Time is up!', 'Game over!', [{ text: 'Restart', onPress: initializeGame }]);
            return;
        }
        const timer = setTimeout(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);
        return () => clearTimeout(timer);
    }, [timeLeft]);

    const initializeGame = () => {
        const randomWord = getRandomWord();
        setCurrentWord(randomWord);
        const shuffledWord = shuffleWord(randomWord);
        setWordInGrid(shuffledWord);
        setSelectedLetters([]);
        setSelectedWord('');
        setTimeLeft(GAME_DURATION_SECONDS);
    };

    const getRandomWord = () => {
        return WORDS[Math.floor(Math.random() * WORDS.length)];
    };

    const shuffleWord = (word) => {
        const shuffledWord = word.split('').sort(() => Math.random() - 0.5);
        return shuffledWord;
    };

    const handleLetterPress = (letter, index) => {
        if (timeLeft === 0) return;
        const newSelectedLetters = [...selectedLetters];
        newSelectedLetters.push({ letter, index });
        setSelectedLetters(newSelectedLetters);
        const selectedWord = newSelectedLetters.map(letter => letter.letter).join('');
        setSelectedWord(selectedWord);
    };

    const submitWord = async () => {
        if (timeLeft === 0) {
            Alert.alert('Time is up!', 'Game over!');
            return;
        }
        if (selectedWord.toUpperCase() === currentWord) {
            const newScore = score + 1;
            const newLevel = level + 1;
            setScore(newScore);
            setLevel(newLevel);
            Alert.alert('Congratulations!', 'You found the word!', [{ text: 'Next Level', onPress: initializeGame }]);
            await saveProgress(newScore, newLevel);
        } else {
            Alert.alert('Incorrect', 'Please try again.');
        }
    };

    const saveProgress = async (newScore, newLevel) => {
        await AsyncStorage.setItem('wordScore', newScore.toString());
        await AsyncStorage.setItem('wordLevel', newLevel.toString());
    };

    return (
        <LinearGradient colors={['#49BEB5', '#279C93', '#239C92', '#219C92', '#1F9C92']} style={styles.container}>
            <View style={styles.ScoreDetails} >
                <Text style={styles.Score} >
                    Score: {score}
                </Text>
                <Text style={styles.Score}>
                    Level: {level}
                </Text>
            </View>
            <View >
                <Linee />
            </View>
            <View>
                <SequenceTitle />
            </View>
            <View>
                <Text style={styles.timer}>Time left: {timeLeft} secs</Text>
                <Text style={styles.wordToFind}>Word: {currentWord}</Text>
            </View>
            <View style={styles.Images} >
                <SequenceMain />
                <SequenceComment style={{ top: 90 }} />
            </View>
            <View style={styles.gridContainer}>
                {wordInGrid.map((letter, index) => (
                    <TouchableOpacity
                        key={index}
                        style={[styles.letterButton, selectedLetters.some(item => item.index === index) && styles.selectedLetter]}
                        onPress={() => handleLetterPress(letter, index)}
                        disabled={selectedWord.length === currentWord.length || timeLeft === 0}
                    >
                        <Text style={styles.letterText}>{letter}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.Buttons} >
                <TouchableOpacity style={styles.submitButton} onPress={submitWord} disabled={timeLeft === 0}>
                    <Text style={styles.submitButtonText}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.submitButton} onPress={() => navigation.navigate('Home', { wordScore, wordLevel })} >
                    <Text style={styles.submitButtonText}>Back</Text>
                </TouchableOpacity>
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
        top:10
    },
    Score: {
        color: 'white',
        fontSize: 20
    },
    Images: {
        flexDirection: 'row',
        width: "100%",
    },
    timer: {
        fontSize: 15,
        color: 'white'
    },
    wordToFind: {
        fontSize: 15,
        color: 'white'
    },
    score: {
        fontSize: 20,
        marginBottom: 10,
    },
    level: {
        fontSize: 20,
        marginBottom: 10,
    },
    gridContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        width: '85%',
        backgroundColor: '#17746D',
        borderRadius: 10,
        padding: 10,
        top:15
    },
    letterButton: {
        width: 40,
        height: 40,
        margin: 5,
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 10
    },
    selectedLetter: {
        backgroundColor: 'yellow',
    },
    letterText: {
        fontSize: 18,
        color: 'black',
        fontWeight: '900'
    },
    submitButton: {
        marginTop: 20,
        backgroundColor: '#D9D9D9',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
    },
    submitButtonText: {
        color: 'black',
        fontSize: 16,
        fontWeight:'900'
    },
    Buttons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    }
});

export default WordSearchGame;
