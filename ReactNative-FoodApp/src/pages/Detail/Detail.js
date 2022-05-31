import React from 'react'
import { ScrollView, Text, Image } from 'react-native'
import styles from './Detail.style'
import Config from 'react-native-config'
import useFetch from '../../hooks/useFetch'

import Success from '../../components/Success'
import Error from '../../components/Error'
import CustomButton from '../../components/CustomButton'
import Separator from '../../components/Separator/Separator'

const Detail = ({ route }) => {
    const { error, loading, data } = useFetch(`${Config.API_DETAIL_URL}${route.params.id}`)

    if (loading) {
        return <Success />
    }

    if (error) {
        return <Error />
    }

    return (
        <ScrollView style={styles.container} showsHorizontalScrollIndicator={false}>
            <Image style={styles.image} source={{ uri: data.meals[0].strMealThumb }} />
            <Text style={styles.title}>{data.meals[0].strMeal}</Text>
            <Separator />
            <Text style={styles.desc}>{data.meals[0].strInstructions}</Text>
            <CustomButton
                color='red'
                title='Go Youtube'
                link={data.meals[0].strYoutube}
            />
        </ScrollView>
    )
}

export default Detail