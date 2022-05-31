import React from 'react'
import { View, StyleSheet } from 'react-native'

const Separator = () => {
    return (
        <View style={styles.container} />
    )
}

export default Separator

const styles = StyleSheet.create({

    container: {
        height: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        marginVertical: 5,
    },
})