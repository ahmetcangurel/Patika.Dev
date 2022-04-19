import React from 'react'
import { View, Text } from 'react-native'
import styles from './TaskItem.Styles'

const TaskItem = (props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.item.text}</Text>
        </View>
    )
}

export default TaskItem