import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import styles from './TaskItem.Styles'

const TaskItem = ({ item, onPress, onLongPress }) => {



    return (
        <TouchableOpacity
            onLongPress={onLongPress}
            onPress={onPress}
            style={item.isCompleted == true ? styles.doneContainer : styles.container}
            activeOpacity={0.7}
        >
            <Text style={item.isCompleted == true ? styles.doneTitle : styles.title}>{item.text}</Text>
        </TouchableOpacity>
    )
}

export default TaskItem