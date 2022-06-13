import React from 'react'
import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'
import styles from './Button.style'

const Button = ({ onPress, title, loading }) => {
    return (
        <TouchableOpacity onPress={onPress} disabled={loading} style={styles.container}>
            {loading ?
                <ActivityIndicator color='white' /> :
                <Text style={styles.title}>{title}</Text>
            }
        </TouchableOpacity>
    )
}

export default Button