import React from 'react'
import { View, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from './Input.style'

const Input = ({ placeholder, onChangeText, value, iconName, isSecure }) => {
    return (
        <View style={styles.container}>
            <TextInput
                onChangeText={onChangeText}
                value={value}
                placeholder={placeholder}
                style={styles.input}
                secureTextEntry={isSecure}
            />
            <Icon name={iconName} size={24} color='gray' />
        </View>
    )
}

export default Input