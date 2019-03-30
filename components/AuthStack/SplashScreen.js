import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

class SplashScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>
                    SplashScreen
                </Text>
            </View>
        )
    }
}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontFamily: 'Avenir Next',
        fontSize: 20,
        fontWeight: '600'
    }
})