import React from 'react'
import { View, StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native'

const Error = () => {
    return (
        <View style={styles.container}>
            <LottieView
                source={require('../../assets/error.json')}
                autoPlay={true}
                loop={true}
            />
        </View>
    )
}

export default Error

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})