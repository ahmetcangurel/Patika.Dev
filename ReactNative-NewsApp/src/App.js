import React from 'react'
import { TouchableOpacity, View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native'
import ProductCard from './components/ProductCard'
import SearchInput from './components/SearchInput'

import dummyData from './dummyData'

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>PATIKASTORE</Text>
      <SearchInput />
      <FlatList
        data={dummyData}
        renderItem={(product) =>
          <ProductCard
            image={product.item.imgURL}
            title={product.item.title}
            price={product.item.price}
          />
        }
        numColumns={2}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'purple',
  }
})

export default App