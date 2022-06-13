import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './Button.style'

const Button = ({ onPress, title, icon }) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress} activeOpacity={.8}>
            <Icon name={icon} size={20} color="#fff" />
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button