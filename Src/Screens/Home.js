import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LinearGradient from 'react-native-linear-gradient';
import HeadingIcon from '../Assets/Home/HeadingIcon';
import Heading from '../Assets/Home/Heading';
import Title from '../Assets/Home/Title';
import ImageOne from '../Assets/Home/ImageOne';
import GameOneTitle from '../Assets/Home/GameOne/GameOneTitle';
import GameOneSubTitle from '../Assets/Home/GameOne/GameOneSubTitle';
import ImageTwo from '../Assets/Home/SequenceSolverGame/ImageTwo';
import GameTitle from '../Assets/Home/SequenceSolverGame/GameTitle';
import GameSubTitle from '../Assets/Home/SequenceSolverGame/GameSubTitle';
import WordSolverImage from '../Assets/Home/WordSolver/WordSolverImage';
import WordSolverTitle from '../Assets/Home/WordSolver/WordSolveTitle';
import WordSolverSubTitle from '../Assets/Home/WordSolver/WordSolverSubTitle';

const Home = ({ route, navigation }) => {
    const { score = 0, level = 1, numberScore = 0, numberLevel = 1, wordScore = 0, wordLevel = 1 } = route.params || {};
    const [totalScore, setTotalScore] = useState(0);
    const [sequenceSolverScore, setSequenceSolverScore] = useState(score);
    const [sequenceSolverLevel, setSequenceSolverLevel] = useState(level);
    const [numberSolverScore, setNumberSolverScore] = useState(numberScore);
    const [numberSolverLevel, setNumberSolverLevel] = useState(numberLevel);
    const [wordSolverScore, setWordSolverScore] = useState(wordScore);
    const [wordSolverLevel, setWordSolverLevel] = useState(wordLevel);

    useEffect(() => {
        const loadProgress = async () => {
            const savedScore = await AsyncStorage.getItem('score');
            const savedLevel = await AsyncStorage.getItem('level');
            const savedNumberScore = await AsyncStorage.getItem('numberScore');
            const savedNumberLevel = await AsyncStorage.getItem('numberLevel');
            const savedWordScore = await AsyncStorage.getItem('wordScore');
            const savedWordLevel = await AsyncStorage.getItem('wordLevel');

            if (savedScore !== null && savedLevel !== null) {
                setSequenceSolverScore(parseInt(savedScore));
                setSequenceSolverLevel(parseInt(savedLevel));
            }

            if (savedNumberScore !== null && savedNumberLevel !== null) {
                setNumberSolverScore(parseInt(savedNumberScore));
                setNumberSolverLevel(parseInt(savedNumberLevel));
            }

            if (savedWordScore !== null && savedWordLevel !== null) {
                setWordSolverScore(parseInt(savedWordScore));
                setWordSolverLevel(parseInt(savedWordLevel));
            }

            setTotalScore(
                (savedScore !== null ? parseInt(savedScore) : score) +
                (savedNumberScore !== null ? parseInt(savedNumberScore) : numberScore) +
                (savedWordScore !== null ? parseInt(savedWordScore) : wordScore)
            );
        };
        loadProgress();
    }, [score, level, numberLevel, numberScore, wordLevel, wordScore]);

    useEffect(() => {
        const saveProgress = async () => {
            await AsyncStorage.setItem('score', sequenceSolverScore.toString());
            await AsyncStorage.setItem('level', sequenceSolverLevel.toString());
            await AsyncStorage.setItem('numberScore', numberSolverScore.toString());
            await AsyncStorage.setItem('numberLevel', numberSolverLevel.toString());
            await AsyncStorage.setItem('wordScore', wordSolverScore.toString());
            await AsyncStorage.setItem('wordLevel', wordSolverLevel.toString());
        };
        saveProgress();
    }, [sequenceSolverScore, sequenceSolverLevel, numberSolverScore, numberSolverLevel, wordSolverScore, wordSolverLevel]);

    return (
        <LinearGradient
            colors={['#94C369', '#5BBA9F', '#72C3B4', '#17A5AA']}
            style={styles.gradient}  >
            <View style={styles.Logo}>
                <HeadingIcon />
            </View>
            <View style={styles.Title} >
                <Heading />
                <Title />
            </View>
            <View style={styles.Games}>
                <TouchableOpacity style={styles.GameOne} onPress={() => navigation.navigate('Game', { numberScore: numberSolverScore, numberLevel: numberSolverLevel })} >
                    <View>
                        <ImageOne />
                    </View>
                    <View>
                        <GameOneTitle />
                        <GameOneSubTitle />
                        <View style={styles.ScoreAndLevel} >
                            <Text style={styles.score} >
                                Score :{numberSolverScore}
                            </Text>
                            <Text style={styles.score}>
                                Level :{numberSolverLevel}
                            </Text>
                        </View>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity style={styles.SequenceSolver} onPress={() => navigation.navigate('WordSearchGame', { wordScore: wordSolverScore, wordLevel: wordSolverLevel })}  >
                    <View>
                        <ImageTwo />
                    </View>
                    <View>
                        <GameTitle />
                        <GameSubTitle />
                        <View style={styles.ScoreAndLevel} >
                            <Text style={styles.score} >
                                Score : {wordSolverScore}
                            </Text>
                            <Text style={styles.score}>
                                Level :{wordSolverLevel}
                            </Text>
                        </View>
                    </View>

                </TouchableOpacity>
                <TouchableOpacity style={styles.WordSolver} onPress={() => navigation.navigate('SequenceSolver', { score: sequenceSolverScore, level: sequenceSolverLevel })} >
                    <View>
                        <WordSolverImage />
                    </View>
                    <View>
                        <WordSolverTitle />
                        <WordSolverSubTitle />
                        <View style={styles.ScoreAndLevel} >
                            <Text style={styles.score} >
                                Score : {sequenceSolverScore}
                            </Text>
                            <Text style={styles.score}>
                                Level : {sequenceSolverLevel}
                            </Text>
                        </View>
                    </View>

                </TouchableOpacity>
            </View>
            {/* <Text>Home Total Score: {totalScore}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Game', { numberScore: numberSolverScore, numberLevel: numberSolverLevel })}>
                <Text>Game Score: {numberSolverScore}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('SequenceSolver', { score: sequenceSolverScore, level: sequenceSolverLevel })}>
                <Text style={{ color: 'black' }}>Sequence Solver Score: {sequenceSolverScore}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('WordSearchGame', { wordScore: wordSolverScore, wordLevel: wordSolverLevel })}>
                <Text>Word Search Score: {wordSolverScore}</Text>
            </TouchableOpacity> */}
        </LinearGradient>
    );
};

export default Home;

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    Logo: {
        width: "80%",
        alignItems: 'flex-start'
    },
    Title: {
        width: "80%",
        alignItems: 'flex-start'
    },
    Games: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20
    },
    GameOne: {
        flexDirection: 'row',
        width: '80%',
        height: 80,
        backgroundColor: '#3BAEB6',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        gap: 10
    },
    ScoreAndLevel: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20
    },
    score: {
        color: 'white',
        fontSize: 10
    },
    SequenceSolver: {
        flexDirection: 'row',
        width: '80%',
        height: 80,
        backgroundColor: '#569E98',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        gap: 10
    },
    WordSolver: {
        flexDirection: 'row',
        width: '80%',
        height: 80,
        backgroundColor: '#61A6DA',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        gap: 10
    }
});
