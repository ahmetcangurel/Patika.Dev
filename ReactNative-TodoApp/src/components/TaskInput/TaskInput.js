import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import styles from './TaskInput.Styles'

const TaskInput = ({ onPress, onChangeText }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Yapılacakları Yaz!"
                onChangeText={onChangeText}
            />
            <TouchableOpacity
                onPress={onPress}
                style={styles.addButton}
            >
                <Text style={styles.addButtonText}>Kaydet</Text>
            </TouchableOpacity>
        </View>
    )
}

export default TaskInput