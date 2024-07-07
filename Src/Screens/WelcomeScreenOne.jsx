import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
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
                {/* <IconOne /> */}
                <Image source={require('../Assets/WelcomeScreen/Icon.png')} />
            </View>
            <View style={{ width: '100%', alignItems: 'center' }} >
                <View style={styles.Heading} >
                    <Heading />
                </View>
                <TouchableOpacity style={styles.NextButton} onPress={() => navigation.navigate("WelcomeTwo")} >
                    <Text style={styles.Text}>Next</Text>
                </TouchableOpacity>
            </View>


        </LinearGradient>
    )
}

export default WelcomeScreenOne

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    IconOne: {
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    IconTwo: {
        justifyContent: 'center',
        alignItems: 'center'
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