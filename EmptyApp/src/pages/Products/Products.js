import React from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import styles from './Products.style'
import Config from 'react-native-config'

import ProductCard from '../../components/ProductCard'
import useFetch from '../../hooks/useFetch'
import Loading from '../../components/Loading'
import Error from '../../components/Error'

const Products = ({ navigation }) => {
  const { loading, error, data } = useFetch(Config.API_URL)

  const handleProductSelect = id => {
    navigation.navigate('Detail', { id })
  }

  const renderProduct = ({ item }) => <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  

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
    <View>
      <FlatList
        data={data}
        renderItem={renderProduct}
      />
    </View>
  )
}

export default Products