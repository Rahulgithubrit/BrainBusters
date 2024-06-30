/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Navigation from './CentalNavigation/Navigation';
import Game from './Src/Components/Games/Game';
import WordSearch from './Src/Components/Games/WordSerach';
import SequenceSolver from './Src/Components/Games/SequenceSolver'
import WelcomeScreenOne from './Src/Screens/WelcomeScreenOne';
import WelcomeScreenTwo from './Src/Screens/WelcomeScreenTwo';


function App() {


  return (
    <>
      <Navigation />
      {/* <Game /> */}
      {/* <WordSearch /> */}
      {/* <SequenceSolver /> */}
      {/* <WelcomeScreenOne /> */}
      {/* <WelcomeScreenTwo /> */}
    </>
  );
}


export default App;
