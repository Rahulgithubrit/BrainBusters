import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from '../Src/Screens/Home'
import Game from '../Src/Components/Games/Game'
import { createStackNavigator } from '@react-navigation/stack';
import SequenceSolver from '../Src/Components/Games/SequenceSolver';
import WordSearchGame from '../Src/Components/Games/WordSerach';
import { NavigationContainer } from '@react-navigation/native';
import WelcomeScreenOne from '../Src/Screens/WelcomeScreenOne';
import WelcomeScreenTwo from '../Src/Screens/WelcomeScreenTwo';
import Splash from '../Src/Screens/SplashScreen';

const Navigation = () => {
    const Stack = createStackNavigator();
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="SplashScreen">
                <Stack.Screen name="SplashScreen" component={Splash} />
                <Stack.Screen name="WelcomeOne" component={WelcomeScreenOne} />
                <Stack.Screen name="WelcomeTwo" component={WelcomeScreenTwo} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Game" component={Game} />
                <Stack.Screen name="SequenceSolver" component={SequenceSolver} />
                <Stack.Screen name="WordSearchGame" component={WordSearchGame} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation

const styles = StyleSheet.create({})