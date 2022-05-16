import React from 'react'
import { View, Text } from 'react-native'
import styles from './Header.Styles'

const Header = ({ count }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Yapılacaklar</Text>
            <Text style={styles.counter}>{count.length}</Text>
        </View>
    )
}

export default Header