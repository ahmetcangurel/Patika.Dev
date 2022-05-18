import React from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from './Input.Style'

const Input = ({ label, onChangeText, placeholder }) => {
    return (
        //34 48
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput onChangeText={onChangeText} placeholder={placeholder} />
            </View>
        </View>
    )
}

export default Input