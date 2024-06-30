import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import IconOne from '../Assets/WelcomeScreen/IconOne'
import IconTwo from '../Assets/WelcomeScreen/IconTwo'
import Heading from '../Assets/WelcomeScreen/Heading'
import { useNavigation } from '@react-navigation/native'


const WelcomeScreenOne = () => {
    const navigation = useNavigation()
    return (
        <LinearGradient
            colors={['#94C369', '#5BBA9F', '#72C3B4', '#17A5AA']}
            style={styles.gradient}
        >
            <View style={styles.IconOne} >
                <IconTwo />
            </View>
            <View style={styles.IconTwo} >
                <IconOne />
            </View>
            <View style={styles.Heading} >
                <Heading />
            </View>
            <TouchableOpacity style={styles.NextButton} onPress={() => navigation.navigate("WelcomeTwo")} >
                <Text style={styles.Text}>Next</Text>
            </TouchableOpacity>

        </LinearGradient>
    )
}

export default WelcomeScreenOne

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    IconOne: {
        justifyContent: 'center',
        alignItems: 'flex-end',
        left: 60
    },
    IconTwo: {
        alignItems: 'flex-start',
        right: 50
    },
    Heading: {
        alignItems: 'center'
    },
    NextButton: {
        width: '80%',
        height: 50,
        backgroundColor: '#CDC2C2',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20
    },
    Text: {
        color: 'black',
        fontSize: 22
    }
})