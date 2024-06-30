import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import SVGOne from '../Assets/WelcomeScreenTwo/SVGOne'
import SVGTwo from '../Assets/WelcomeScreenTwo/SVGTwo'
import { useNavigation } from '@react-navigation/native'

const WelcomeScreenTwo = () => {
    const navigation = useNavigation()
    return (
        <LinearGradient
            colors={['#94C369', '#5BBA9F', '#72C3B4', '#17A5AA']}
            style={styles.gradient}
        >
            <View style={styles.IconOne} >
                <SVGOne />
            </View>
            <View style={styles.IconTwo} >
                <SVGTwo />
            </View>
            <TouchableOpacity style={styles.StartButton} onPress={() => navigation.navigate('Home')} >
                <Text style={styles.Text}>START GAME</Text>
            </TouchableOpacity>

        </LinearGradient>
    )
}

export default WelcomeScreenTwo;

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    IconOne: {
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    IconTwo: {
        alignItems: 'flex-start',
    },
    StartButton: {
        width: '80%',
        height: 50,
        backgroundColor: '#E3AD4B',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        top: 10
    },
    Text: {
        color: 'black',
        fontSize: 22
    }
})