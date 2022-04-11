import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from './Card.style'

const Card = ({ title, subTitle, buttonText, onPress }) => {
    return (
        <View style={styles.container}>
            <View style={styles.body}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.subTitle}>{subTitle}</Text>
            </View>
            <TouchableOpacity
                onPress={onPress}
                style={styles.button}
            >
                <Text style={styles.buttonText}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Card