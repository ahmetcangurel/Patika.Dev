import React from 'react'
import { TouchableOpacity, View, Text, Image } from 'react-native'
import styles from './ProductCard.Style'

const ProductCard = ({ image, title, price }) => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={.5}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: image }} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </TouchableOpacity>
  )
}

export default ProductCard