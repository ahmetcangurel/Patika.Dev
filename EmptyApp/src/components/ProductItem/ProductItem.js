import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import styles from './ProductItem.style'

const ProductItem = ({ item, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Image style={styles.image} source={{ uri: item.image }} />
            <View style={styles.subContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>{item.price} TL</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ProductItem