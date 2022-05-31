import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './FoodItem.style'

const FoodItem = ({ item, onSelect }) => {
    return (
        <TouchableOpacity onPress={onSelect} activeOpacity={.8} style={styles.container}>
            <Image style={styles.image} source={{ uri: item.strMealThumb }} />
            <Text style={styles.title}>{item.strMeal}</Text>
        </TouchableOpacity>
    )
}

export default FoodItem