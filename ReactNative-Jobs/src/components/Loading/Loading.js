import React from 'react'
import { View, StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native'

const Loading = () => {
    return (
        <View style={styles.container}>
            <LottieView
                source={require('../../assets/search.json')}
                autoPlay={true}
                loop={true}
            />
        </View>
    )
}

export default Loading

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})