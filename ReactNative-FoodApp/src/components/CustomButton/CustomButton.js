import React from 'react'
import { View, Text, TouchableOpacity, Linking } from 'react-native'
import styles from './CustomButton.styles'

const CustomButton = ({ color, title, link }) => {
    return (
        <TouchableOpacity 
        activeOpacity={.8} 
        style={[styles.container, { backgroundColor: color }]}
        onPress={() => Linking.openURL(link)}
        >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default CustomButton