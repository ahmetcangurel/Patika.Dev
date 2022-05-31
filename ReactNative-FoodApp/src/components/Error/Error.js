import React from 'react'
import { StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native'

const Error = () => {
    return (
        <LottieView
            source={require('../../assets/error.json')}
            autoPlay
            loop
            style={styles.animation}
        />
    )
}

export default Error

const styles = StyleSheet.create({
    animation: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})