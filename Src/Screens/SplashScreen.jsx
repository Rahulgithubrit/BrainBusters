import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet, View, Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { Line } from 'react-native-svg';

const SplashScreen = () => {
    // Create an animated value
    //  const zoomAnim = useRef(new Animated.Value(1)).current;  // Initial scale is 1
    const zoomAnim = useRef(new Animated.Value(0.1)).current;
    const navigation = useNavigation()

    useEffect(() => {
        // Start the zoom-out animation
        Animated.timing(zoomAnim, {
            toValue: 1,  // Zoom out to 0 times the size
            duration: 3000,  // Animation should last 1000 milliseconds
            useNativeDriver: true  // Use native driver for better performance
        }).start();
        setTimeout(() => {
            navigation.navigate('Home')
        }, 2500)
    }, [zoomAnim]);

    return (
        <LinearGradient colors={['#94C369', '#5BBA9F', '#72C3B4', '#17A5AA']} style={styles.container}>
            <Animated.Image
                source={require('../Assets/Splashlogo.png')}  // Replace with your image path
                style={[styles.logo, { transform: [{ scale: zoomAnim }] }]}
            />
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',  // Set your desired background color
    },
    logo: {
        width: 300,  // Set your desired width
        height: 300,  // Set your desired height
    },
});

export default SplashScreen;
