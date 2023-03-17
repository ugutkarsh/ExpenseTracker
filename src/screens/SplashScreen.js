import React, { useEffect } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";



const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        // console.log("SplashScreen");
        setTimeout(() => {
            navigation.replace('Login')
        }, 2000);
    }, [])

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={require('../image/ExpenseTracker.jpg')} resizeMode="cover" style={styles.image} />
        </View>
    );
};
const styles = StyleSheet.create({
    Button: {
        backgroundColor: '#000',
        width: 100,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 42,
        lineHeight: 84,
        fontWeight: 'bold',
        textAlign: 'center',
        backgroundColor: '#000000c0',
    },
});
export default SplashScreen;