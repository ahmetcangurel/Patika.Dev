import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Products from './pages/Products'
import Detail from './pages/Detail'

const Stack = createNativeStackNavigator()

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Products'
          component={Products}
          options={{
            title: 'Dükkan',
            headerStyle: { backgroundColor: '#64b5f6', },
            headerTextStyle: { color: 'white', },
            headerTintColor: 'white',
          }}
        />
        <Stack.Screen name='Detail' component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router