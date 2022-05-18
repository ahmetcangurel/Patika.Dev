import React from 'react'
import { View, Text, Button } from 'react-native'

const First = ({ navigation }) => {
  return (
    <View>
      <Text>First Hello</Text>
      <Button
        title="Go to Second"
        onPress={() => navigation.navigate('Second', {
          userName: 'John Doe'
        })}
      />
    </View>
  )
}

export default First