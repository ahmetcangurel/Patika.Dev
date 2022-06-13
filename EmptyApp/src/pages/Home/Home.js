import React from 'react'
import useFetch from '../../hooks/useFetch'
import { View, Text, FlatList, Button } from 'react-native'
import ProductItem from '../../components/ProductItem'

import Loading from '../../components/Loading'
import Error from '../../components/Error'
import { useDispatch } from 'react-redux'


const Home = ({ navigation }) => {
    const { data, loading, error } = useFetch('https://fakestoreapi.com/products')
    const dispatch = useDispatch()

    const renderProducts = ({ item }) => <ProductItem onPress={() => navigation.navigate('Detail', { id: item.id })} item={item} />


    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    return (
        <View>
            <Button
                title='Çıkış Yap'
                onPress={() => dispatch({ type: 'SET_USER', payload: { user: null } })}
            />
            <FlatList
                data={data}
                renderItem={renderProducts}
            />
        </View>
    )
}

export default Home