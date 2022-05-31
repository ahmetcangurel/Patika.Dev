import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './CategoryItem.style'

const CategoryItem = ({ onSelect, item }) => {
    return (
        <TouchableOpacity onPress={onSelect} activeOpacity={.8} style={styles.container}>
            <Image source={{ uri: item.strCategoryThumb }} style={styles.image} />
            <Text style={styles.title}>{item.strCategory}</Text>
        </TouchableOpacity>
    )
}

export default CategoryItem