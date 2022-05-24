import React from 'react'
import { View, Text, Image } from 'react-native'
import Config from 'react-native-config'
import styles from './Detail.style'
import useFetch from '../../hooks/useFetch'
import Loading from '../../components/Loading'
import Error from '../../components/Error'

const Detail = ({ route }) => {
    console.log(route.params.id)

    const { loading, error, data } = useFetch(`${Config.API_URL}/${route.params.id}`)

    if (loading) {
        return (
            <Loading />
        )
    }

    if (error) {
        return (
            <Error />
        )
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: data.image }} style={styles.image} />
            <View style={styles.bodyContainer}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.desc}>{data.description}</Text>
                <Text style={styles.price}>{data.price} TL</Text>
            </View>
        </View>
    )
}

export default Detail