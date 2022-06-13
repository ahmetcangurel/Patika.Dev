import React from 'react'
import useFetch from '../../hooks/useFetch'
import { View, Text, Image } from 'react-native'
import styles from './Detail.style'

import Loading from '../../components/Loading'
import Error from '../../components/Error'

const Detail = ({ route }) => {
    const productID = route.params.id

    const { data, loading, error } = useFetch(`https://fakestoreapi.com/products/${productID}`)

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: data.image }} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.desc}>{data.description}</Text>
                <Text style={styles.price}>{data.price} TL</Text>
            </View>
        </View>
    )
}

export default Detail