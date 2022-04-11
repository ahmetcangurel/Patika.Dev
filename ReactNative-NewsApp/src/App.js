import React from 'react'
import { TouchableOpacity, View, Text, SafeAreaView, StyleSheet } from 'react-native'
import Card from './components/Card'

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <Card
        title='John Doe'
        subTitle='Lorem ipsum dolor sit amet.'
        buttonText='I LIKED'
        onPress={() => alert('Button Pressed!')}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0',
  }
})

export default App