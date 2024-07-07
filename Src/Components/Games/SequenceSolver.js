import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Linee from '../../Assets/Line';
import SequenceTitle from '../../Assets/SequenceSolver/SequenceTitle';
import SequenceMain from '../../Assets/SequenceSolver/SequenceMain';
import SequenceComment from '../../Assets/SequenceSolver/SequenceComment';
import WordTitle from '../../Assets/WordSearch/WordTitle';
import WordImage from '../../Assets/WordSearch/WordImage';
import WordComment from '../../Assets/WordSearch/WordComment';
import Banner from '../Google Ads/Banner';
import Interstitial from '../Google Ads/Interstitial';

const questions = [
    { question: "What is the capital of France?", answer: "Paris", level: 1 },
    { question: "What is the capital of Spain?", answer: "Madrid", level: 2 },
    { question: "What is the capital of Italy?", answer: "Rome", level: 3 },
    { question: "What is the capital of Germany?", answer: "Berlin", level: 4 },
    { question: "What is the capital of Portugal?", answer: "Lisbon", level: 5 },
    { question: "What is the capital of the United Kingdom?", answer: "London", level: 6 },
    { question: "What is the capital of Russia?", answer: "Moscow", level: 7 },
    { question: "What is the capital of Japan?", answer: "Tokyo", level: 8 },
    { question: "What is the capital of China?", answer: "Beijing", level: 9 },
    { question: "What is the capital of India?", answer: "Delhi", level: 10 },
    { question: "What is the capital of Australia?", answer: "Canberra", level: 11 },
    { question: "What is the capital of Brazil?", answer: "Brasilia", level: 12 },
    { question: "What is the capital of Canada?", answer: "Ottawa", level: 13 },
    { question: "What is the largest planet?", answer: "Jupiter", level: 14 },
    { question: "What is the smallest planet?", answer: "Mercury", level: 15 },
    { question: "Who wrote 'Romeo and Juliet'?", answer: "Shakespeare", level: 16 },
    { question: "Who developed relativity?", answer: "Einstein", level: 17 },
    { question: "What is the symbol for water?", answer: "H2O", level: 18 },
    { question: "What is the hardest substance?", answer: "Diamond", level: 19 },
    { question: "What is the tallest mountain?", answer: "Everest", level: 20 },
    { question: "Who painted the Mona Lisa?", answer: "Da Vinci", level: 21 },
    { question: "What is the longest river?", answer: "Nile", level: 22 },
    { question: "What is the largest ocean?", answer: "Pacific", level: 23 },
    { question: "Who walked on the moon?", answer: "Armstrong", level: 24 },
    { question: "Main ingredient in guacamole?", answer: "Avocado", level: 25 },
    { question: "How many continents?", answer: "Seven", level: 26 },
    { question: "Smallest country?", answer: "Vatican", level: 27 },
    { question: "Largest mammal?", answer: "Whale", level: 28 },
    { question: "Father of Computers?", answer: "Babbage", level: 29 },
    { question: "Fastest land animal?", answer: "Cheetah", level: 30 },
    { question: "Colors in a rainbow?", answer: "Seven", level: 31 },
    { question: "Main gas in air?", answer: "Nitrogen", level: 32 },
    { question: "Largest desert?", answer: "Sahara", level: 33 },
    { question: "Largest organ?", answer: "Skin", level: 34 },
    { question: "Wrote 'Pride and Prejudice'?", answer: "Austen", level: 35 },
    { question: "Symbol for gold?", answer: "Au", level: 36 },
    { question: "Discovered penicillin?", answer: "Fleming", level: 37 },
    { question: "Largest island?", answer: "Greenland", level: 38 },
    { question: "Tallest animal?", answer: "Giraffe", level: 39 },
    { question: "First US President?", answer: "Washington", level: 40 },
    { question: "Smallest bone?", answer: "Stapes", level: 41 },
    { question: "Fastest fish?", answer: "Sailfish", level: 42 },
    { question: "Most spoken language?", answer: "Mandarin", level: 43 },
    { question: "Wrote 'Mockingbird'?", answer: "Lee", level: 44 },
    { question: "Capital of Egypt?", answer: "Cairo", level: 45 },
    { question: "Main ingredient in sushi?", answer: "Rice", level: 46 },
    { question: "Symbol for iron?", answer: "Fe", level: 47 },
    { question: "Queen of Pop?", answer: "Madonna", level: 48 },
    { question: "Largest bird?", answer: "Ostrich", level: 49 },
    { question: "Currency of Japan?", answer: "Yen", level: 50 },
    { question: "Wrote '1984'?", answer: "Orwell", level: 51 },
    { question: "Capital of Thailand?", answer: "Bangkok", level: 52 },
    { question: "Hottest planet?", answer: "Venus", level: 53 },
    { question: "Invented telephone?", answer: "Bell", level: 54 },
    { question: "Capital of Greece?", answer: "Athens", level: 55 },
    { question: "Largest bone?", answer: "Femur", level: 56 },
    { question: "Painted Sistine Chapel?", answer: "Michelangelo", level: 57 },
    { question: "Symbol for sodium?", answer: "Na", level: 58 },
    { question: "Capital of South Africa?", answer: "Pretoria", level: 59 },
    { question: "Wrote 'Gatsby'?", answer: "Fitzgerald", level: 60 },
    { question: "Capital of Argentina?", answer: "Buenos Aires", level: 61 },
    { question: "Wrote 'Harry Potter'?", answer: "Rowling", level: 62 },
    { question: "Most abundant gas?", answer: "Nitrogen", level: 63 },
    { question: "Painted 'Starry Night'?", answer: "Van Gogh", level: 64 },
    { question: "First female UK PM?", answer: "Thatcher", level: 65 },
    { question: "Capital of Mexico?", answer: "Mexico City", level: 66 },
    { question: "Symbol for silver?", answer: "Ag", level: 67 },
    { question: "Wrote 'Moby-Dick'?", answer: "Melville", level: 68 },
    { question: "Capital of Turkey?", answer: "Ankara", level: 69 },
    { question: "Ingredient in hummus?", answer: "Chickpeas", level: 70 },
    { question: "Symbol for carbon?", answer: "C", level: 71 },
    { question: "First to win two Nobels?", answer: "Curie", level: 72 },
    { question: "Capital of Sweden?", answer: "Stockholm", level: 73 },
    { question: "Longest bone?", answer: "Femur", level: 74 },
    { question: "Wrote 'LOTR'?", answer: "Tolkien", level: 75 },
    { question: "Currency of India?", answer: "Rupee", level: 76 },
    { question: "Largest reptile?", answer: "Crocodile", level: 77 },
    { question: "Capital of Norway?", answer: "Oslo", level: 78 },
    { question: "Wrote 'Catcher in the Rye'?", answer: "Salinger", level: 79 },
    { question: "Capital of Chile?", answer: "Santiago", level: 80 },
    { question: "Largest country?", answer: "Russia", level: 81 },
    { question: "Symbol for helium?", answer: "He", level: 82 },
    { question: "Wrote 'War and Peace'?", answer: "Tolstoy", level: 83 },
    { question: "Capital of Philippines?", answer: "Manila", level: 84 },
    { question: "Invented light bulb?", answer: "Edison", level: 85 },
    { question: "Smallest bird?", answer: "Hummingbird", level: 86 },
    { question: "Capital of Indonesia?", answer: "Jakarta", level: 87 },
    { question: "Wrote 'Odyssey'?", answer: "Homer", level: 88 },
    { question: "Capital of Kenya?", answer: "Nairobi", level: 89 },
    { question: "Largest animal?", answer: "Whale", level: 90 },
    { question: "Symbol for potassium?", answer: "K", level: 91 },
    { question: "Painted 'Persistence of Memory'?", answer: "Dali", level: 92 }
];

const SequenceSolver = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [shuffledAnswer, setShuffledAnswer] = useState([]);
    const [selectedLetters, setSelectedLetters] = useState([]);
    const [timeLeft, setTimeLeft] = useState(20);
    const [score, setScore] = useState(0);
    const [level, setLevel] = useState(1);
    const [gameOver, setGameOver] = useState(false)

    const navigation = useNavigation();

    useEffect(() => {
        const loadProgress = async () => {
            const savedScore = await AsyncStorage.getItem('score');
            const savedLevel = await AsyncStorage.getItem('level');
            if (savedScore !== null) {
                setScore(parseInt(savedScore));
            }
            if (savedLevel !== null) {
                const savedLevelInt = parseInt(savedLevel);
                setLevel(savedLevelInt);
                setCurrentQuestionIndex(questions.findIndex(q => q.level === savedLevelInt));
            }
        };
        loadProgress();
    }, []);

    useEffect(() => {
        setTimeLeft(10000000);
        shuffleAnswer();
        setSelectedLetters([]);
    }, [currentQuestionIndex]);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (timeLeft > 0) {
                setTimeLeft(timeLeft - 1);
            } else {
                Alert.alert('Time is up');
                nextQuestion();
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeLeft]);

    const currentQuestion = questions[currentQuestionIndex];

    const shuffleAnswer = () => {
        const answerChars = currentQuestion.answer.split('');
        const shuffledChars = answerChars.sort(() => Math.random() - 0.5);
        setShuffledAnswer(shuffledChars);
    };

    const handleLetterPress = (letter) => {
        setSelectedLetters([...selectedLetters, letter]);
    };

    const checkAnswer = () => {
        const userAnswer = selectedLetters.join('');
        if (userAnswer === currentQuestion.answer) {
            setScore(score + 1);
            //Alert.alert('Congratulations!', 'You got it right!');
            setGameOver(true)
            setTimeout(() => {
                nextQuestion();
            }, 1000);
        } else {
            Alert.alert('Sorry, wrong answer', 'Try again!');
        }
        saveProgress();
    };

    const nextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setLevel(level + 1);
        } else {
            setTimeout(() => {
                Alert.alert('Congratulations!', 'You have completed all questions!');
            }, 2000);
        }
        saveProgress();
    };

    const saveProgress = async () => {
        await AsyncStorage.setItem('score', score.toString());
        await AsyncStorage.setItem('level', level.toString());
    };

    return (
        <LinearGradient colors={['#64AECD', '#69AED0', '#62A1C7', '#5C94BE', '#3E76A1']} style={styles.container}>
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
            <View style={{ alignItems: 'center' }}>
                <WordTitle />
                <Text style={styles.timer}>{`Time left: ${timeLeft} seconds`}</Text>
            </View>
            <View style={styles.Images} >
                <WordImage style={{ top: 130 }} />
                <WordComment style={{ right: 70 }} />
            </View>
            <Text style={styles.question}>{currentQuestion.question}</Text>
            <View style={styles.answerContainer}>
                {shuffledAnswer.map((letter, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.letterButton}
                        onPress={() => handleLetterPress(letter)}
                    >
                        <Text style={styles.letterText}>{letter}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={styles.selectedAnswerContainer}>
                {selectedLetters.map((letter, index) => (
                    <Text key={index} style={styles.selectedLetterText}>
                        {letter}
                    </Text>
                ))}
            </View>
            <View style={styles.Buttons} >
                <TouchableOpacity style={styles.checkButton} onPress={checkAnswer}>
                    <Text style={styles.checkButtonText}>Submit</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.checkButton} onPress={nextQuestion}>
                    <Text style={styles.checkButtonText}>Skip</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.checkButton}
                    onPress={() => navigation.navigate('Home', { score, level })}
                >
                    <Text style={styles.checkButtonText}>Back</Text>
                </TouchableOpacity>
            </View>
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
    level: {
        fontSize: 18,
    },
    score: {
        fontSize: 18,
        marginBottom: 10,
    },
    question: {
        fontSize: 20,
        textAlign: 'center',
        top: 80,
        color: 'white'
    },
    timer: {
        fontSize: 15,
        padding: 0,
        margin: 0,
        color: 'white'
    },
    answerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '80%',
        backgroundColor: '#347EB6',
        borderRadius: 10,
        top: 70
    },
    selectedAnswerContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        top: 50,
    },
    letterButton: {
        backgroundColor: '#D9D9D9',
        padding: 10,
        margin: 5,
        borderRadius: 10,
    },
    letterText: {
        fontSize: 16,
        fontWeight: '900'
    },
    selectedLetterText: {
        fontSize: 16,
        margin: 5,
        color: 'white',
        fontWeight: '900'
    },
    checkButton: {
        backgroundColor: '#D9D9D9',
        padding: 10,
        borderRadius: 10,
    },
    checkButtonText: {
        color: 'black',
        fontSize: 22,
        fontWeight: '900'
    },
    Images: {
        flexDirection: 'row',
        width: "100%",
    },
    Buttons: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        top: 50
    }
});

export default SequenceSolver;