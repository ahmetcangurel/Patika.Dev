import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Welcome from './pages/Welcome'
import MemberSign from './pages/MemberSign'
import MemberResult from './pages/MemberResult'

const Stack = createNativeStackNavigator()

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Welcome' component={Welcome} />
        <Stack.Screen name='MemberSign' component={MemberSign} />
        <Stack.Screen name='MemberResult' component={MemberResult} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Router