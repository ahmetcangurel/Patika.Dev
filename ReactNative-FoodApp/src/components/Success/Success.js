import React from 'react'
import { StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native'

const Success = () => {
    return (
        <LottieView
            source={require('../../assets/success.json')}
            autoPlay
            loop
            style={styles.animation}
        />
    )
}

export default Success

const styles = StyleSheet.create({
    animation: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})