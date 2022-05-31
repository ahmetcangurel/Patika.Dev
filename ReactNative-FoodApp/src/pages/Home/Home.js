import React from 'react'
import { View, Text, FlatList } from 'react-native'
import useFetch from '../../hooks/useFetch'
import Config from 'react-native-config'

import styles from './Home.style'
import CategoryItem from '../../components/CategoryItem'
import Success from '../../components/Success'
import Error from '../../components/Error'

const Home = ({ navigation }) => {
    const { data, loading, error } = useFetch(Config.API_CATEGORIES_URL)

    if (loading) {
        return <Success />
    }

    if (error) {
        return <Text>{error}</Text>
    }

    const renderCategories = ({ item }) =>
        <CategoryItem
            item={item}
            onSelect={() => navigation.navigate('Meals', { id: item.strCategory })}
        />

    return (
        <View style={styles.container}>
            <FlatList
                data={data.categories}
                renderItem={renderCategories}
            />
        </View>
    )
}

export default Home