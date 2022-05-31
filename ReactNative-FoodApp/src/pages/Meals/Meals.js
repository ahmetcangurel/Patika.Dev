import React from 'react'
import { View, Text, FlatList } from 'react-native'
import styles from './Meals.style'
import Config from 'react-native-config'
import useFetch from '../../hooks/useFetch'

import FoodItem from '../../components/FoodItem'
import Success from '../../components/Success'
import Error from '../../components/Error'

const Meals = ({ navigation, route }) => {
    const { error, loading, data } = useFetch(`${Config.API_MEALS_URL}${route.params.id}`)

    if (loading) {
        return <Success />
    }

    if (error) {
        return <Error />
    }

    const renderFoodItem = ({ item }) => <FoodItem onSelect={() => navigation.navigate('Detail', { id: item.idMeal })} item={item} />

    return (
        <View style={styles.container}>
            <FlatList
                data={data.meals}
                renderItem={renderFoodItem}
            />
        </View>
    )
}

export default Meals